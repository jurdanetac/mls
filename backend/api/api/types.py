from typing import Optional
from ninja import Schema
from enum import Enum


class Status(str, Enum):
    ACTIVE = "active"
    OFF_MARKET = "off"
    MEMBERS_ONLY_SHOW = "show"
    MEMBERS_ONLY_DO_NOT_SHOW = "donotshow"


class TemplateProps(Schema):
    status: Status
    address: str
    bedrooms: int
    full_bathrooms: int
    half_bathrooms: int
    garage: int
    sqft: int
    sqft_lot: float
    listing_price: float
    age: int
    listing_agent: str
    listing_agent_office: str
    school_district: str
    arv: float

    # Off-market Optionals
    mls_number: Optional[str] = None
    dom: Optional[int] = None
    disclosures: Optional[str] = None
    open_house: Optional[str] = None
    private_notes: Optional[str] = None
