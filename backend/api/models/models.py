from django.db import models
from api.types import Status


def format_label(text: str) -> str:
    """Converts 'snake_case' to 'Title Case'"""
    return text.replace("_", " ").title()


class Template(models.Model):
    status = models.CharField(
        max_length=25,
        choices=[
            (Status.ACTIVE.value, format_label(Status.ACTIVE.name)),
            (Status.OFF_MARKET.value, format_label(Status.OFF_MARKET.name)),
            (
                Status.MEMBERS_ONLY_SHOW.value,
                format_label(Status.MEMBERS_ONLY_SHOW.name),
            ),
            (
                Status.MEMBERS_ONLY_DO_NOT_SHOW.value,
                format_label(Status.MEMBERS_ONLY_DO_NOT_SHOW.name),
            ),
        ],
        help_text="Current listing status",
    )

    address = models.CharField(max_length=255)
    bedrooms = models.PositiveIntegerField()
    full_bathrooms = models.PositiveIntegerField()
    half_bathrooms = models.PositiveIntegerField()
    garage = models.PositiveIntegerField()
    sqft = models.PositiveIntegerField()
    sqft_lot = models.DecimalField(max_digits=12, decimal_places=2)
    listing_price = models.DecimalField(max_digits=12, decimal_places=2)
    age = models.PositiveIntegerField()
    listing_agent = models.CharField(max_length=100)
    listing_agent_office = models.CharField(max_length=150)
    school_district = models.CharField(max_length=150)
    arv = models.DecimalField(max_digits=12, decimal_places=2)

    # Off-market Optionals
    mls_number = models.CharField(max_length=50, null=True, blank=True)
    dom = models.PositiveIntegerField(null=True, blank=True)
    disclosures = models.TextField(null=True, blank=True)
    open_house = models.CharField(max_length=255, null=True, blank=True)
    private_notes = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name = "Property Template"
        verbose_name_plural = "Properties Templates"

    def __str__(self):
        return f"{self.address} - {self.get_status_display()}"
