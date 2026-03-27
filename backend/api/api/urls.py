"""
URL configuration for api project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path
from ninja import NinjaAPI

from models.models import Template

from .types import TemplateProps

api = NinjaAPI()


@api.post("/templates")
def templates(request, template: TemplateProps):
    template_object = Template.objects.create(
        # Core Details
        status=template.status,
        address=template.address,
        bedrooms=template.bedrooms,
        full_bathrooms=template.full_bathrooms,
        half_bathrooms=template.half_bathrooms,
        garage=template.garage,
        sqft=template.sqft,
        sqft_lot=template.sqft_lot,
        listing_price=template.listing_price,
        age=template.age,
        # Agent & Area Info
        listing_agent=template.listing_agent,
        listing_agent_office=template.listing_agent_office,
        school_district=template.school_district,
        arv=template.arv,
        # Off-market Optionals
        mls_number=template.mls_number,
        dom=template.dom,
        disclosures=template.disclosures,
        open_house=template.open_house,
        private_notes=template.private_notes,
    )
    print(template_object)

    return {"status": 201, "id": template_object.id}


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", api.urls),
]
