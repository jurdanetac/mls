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
    fullBathrooms: int
    halfBathrooms: int
    garage: int
    sqft: int
    sqftLot: float
    listingPrice: float
    age: int
    listingAgent: str
    listingAgentOffice: str
    schoolDistrict: str
    arv: float

    # Off-market Optionals
    mlsNumber: Optional[str] = None
    dom: Optional[int] = None
    disclosures: Optional[str] = None
    openHouse: Optional[str] = None
    privateNotes: Optional[str] = None
