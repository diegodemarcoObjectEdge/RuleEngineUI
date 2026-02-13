/* eslint-disable */
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  EmailAddress: { input: any; output: any };
  File: { input: any; output: any };
  JSONObject: { input: any; output: any };
  JWT: { input: any; output: any };
  URL: { input: any; output: any };
};

export type AddGuestsFromBoardingPassInput = {
  guests: Array<GuestFromBoardingPassInput>;
  mainPassengerEntryId: Scalars["ID"]["input"];
};

export type AddGuestsFromRecordLocatorInput = {
  guests: Array<GuestFromRecordLocatorInput>;
  mainPassengerEntryId: Scalars["ID"]["input"];
};

export type Airport = {
  __typename?: "Airport";
  active: Scalars["Boolean"]["output"];
  city: Scalars["String"]["output"];
  code: Scalars["String"]["output"];
  country: Scalars["String"]["output"];
  geoPos: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lounges: Array<Lounge>;
  name: Scalars["String"]["output"];
};

export type AirportByCode = {
  __typename?: "AirportByCode";
  active: Scalars["Boolean"]["output"];
  city: Scalars["String"]["output"];
  code: Scalars["String"]["output"];
  country: Scalars["String"]["output"];
  geoPos: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lounges: Array<Lounge>;
  name: Scalars["String"]["output"];
};

export type AirportByCodeInput = {
  code: Scalars["String"]["input"];
};

export type AirportFilterInput = {
  city?: InputMaybe<Scalars["String"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type AirportQueryResult = {
  __typename?: "AirportQueryResult";
  pagination: Pagination;
  results: Array<Airport>;
  totalCount: Scalars["Int"]["output"];
};

export type AirportReference = {
  id: Scalars["ID"]["input"];
};

export type AirportReferenceInput = {
  id: Scalars["ID"]["input"];
};

export type AirportUniqueFilterInput = {
  code?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ApplyConsolidatedTagRuleEngineMetadataPayload = {
  ruleEngineMetadataId: Scalars["ID"]["input"];
};

export type AssetBulkFile = {
  __typename?: "AssetBulkFile";
  name: Scalars["String"]["output"];
  urlPath: Scalars["String"]["output"];
};

export type AssetImage = {
  __typename?: "AssetImage";
  name: Scalars["String"]["output"];
  urlPath: Scalars["String"]["output"];
};

export type AssetImageInput = {
  file: Scalars["File"]["input"];
  name: Scalars["String"]["input"];
};

export type AuthenticationOption = {
  __typename?: "AuthenticationOption";
  code: Scalars["String"]["output"];
  company?: Maybe<Company>;
  display: Scalars["Boolean"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  redirectUrl?: Maybe<Scalars["String"]["output"]>;
  signOutRedirectUrl?: Maybe<Scalars["String"]["output"]>;
  type: AuthenticationOptionType;
};

export enum AuthenticationOptionType {
  Saml = "SAML",
  UserCredentials = "USER_CREDENTIALS",
}

export type AuthorizationToken = {
  __typename?: "AuthorizationToken";
  expires?: Maybe<Scalars["Int"]["output"]>;
  token: Scalars["JWT"]["output"];
  user?: Maybe<User>;
};

export type BulkImportFileInput = {
  file: Scalars["File"]["input"];
  type: Scalars["String"]["input"];
};

export type CartItemInput = {
  barcode?: InputMaybe<Scalars["String"]["input"]>;
  loungeEntryId: Scalars["String"]["input"];
  offerCode: Scalars["String"]["input"];
  passengerId: Scalars["String"]["input"];
};

export type CheckInLoungeEntryInput = {
  entryId: Scalars["ID"]["input"];
  numberOfPassengers: Scalars["Int"]["input"];
};

export type Company = {
  __typename?: "Company";
  agentAppUrl?: Maybe<Scalars["String"]["output"]>;
  code: Scalars["String"]["output"];
  darkBackgroundLogoUrl?: Maybe<Scalars["String"]["output"]>;
  egateReentryWindowMinutes?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["ID"]["output"];
  lightBackgroundLogoUrl?: Maybe<Scalars["String"]["output"]>;
  logomarkUrl?: Maybe<Scalars["String"]["output"]>;
  lounges?: Maybe<Array<Lounge>>;
  name: Scalars["String"]["output"];
  partnerCompanyGroup?: Maybe<CompanyGroup>;
  reentryWindowMinutes?: Maybe<Scalars["Int"]["output"]>;
  reentryWindowType?: Maybe<ReentryWindowType>;
  reportsDedupingWindowMinutes?: Maybe<Scalars["Int"]["output"]>;
  serviceUrl?: Maybe<Scalars["String"]["output"]>;
  shortName: Scalars["String"]["output"];
  status: CompanyStatus;
};

export type CompanyFilterInput = {
  code?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  partnerCompanyGroup?: InputMaybe<CompanyGroupReference>;
  shortName?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<CompanyStatus>;
};

export type CompanyGroup = {
  __typename?: "CompanyGroup";
  companies: Array<Company>;
  darkBackgroundLogoUrl?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  lightBackgroundLogoUrl?: Maybe<Scalars["String"]["output"]>;
  logomarkUrl?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  status: CompanyStatus;
};

export type CompanyGroupFilterInput = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<CompanyStatus>;
};

export type CompanyGroupQueryResult = {
  __typename?: "CompanyGroupQueryResult";
  pagination: Pagination;
  results: Array<CompanyGroup>;
  totalCount: Scalars["Int"]["output"];
};

export type CompanyGroupReference = {
  id: Scalars["ID"]["input"];
};

export type CompanyQueryResult = {
  __typename?: "CompanyQueryResult";
  pagination: Pagination;
  results: Array<Company>;
  totalCount: Scalars["Int"]["output"];
};

export type CompanyReferenceInput = {
  id: Scalars["ID"]["input"];
};

export enum CompanyStatus {
  Active = "ACTIVE",
  Deleted = "DELETED",
  Inactive = "INACTIVE",
}

export type ConsolidatedTagRuleEngine = {
  __typename?: "ConsolidatedTagRuleEngine";
  fieldGroups: Array<RuleFieldGroup>;
  tagGroups: Array<RuleEngineTagGroup>;
};

export type CreateCompanyGroupPayload = {
  companies: Array<CompanyReferenceInput>;
  darkBackgroundLogoUrl?: InputMaybe<Scalars["String"]["input"]>;
  lightBackgroundLogoUrl?: InputMaybe<Scalars["String"]["input"]>;
  logomarkUrl?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  status: CompanyStatus;
};

export type CreateCompanyPayload = {
  code: Scalars["String"]["input"];
  darkBackgroundLogoUrl?: InputMaybe<Scalars["String"]["input"]>;
  egateReentryWindowMinutes?: InputMaybe<Scalars["Int"]["input"]>;
  lightBackgroundLogoUrl?: InputMaybe<Scalars["String"]["input"]>;
  logomarkUrl?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  partnerCompanyGroup?: InputMaybe<CompanyGroupReference>;
  reentryWindowMinutes?: InputMaybe<Scalars["Int"]["input"]>;
  reentryWindowType?: InputMaybe<ReentryWindowType>;
  reportsDedupingWindowMinutes?: InputMaybe<Scalars["Int"]["input"]>;
  shortName: Scalars["String"]["input"];
  status: CompanyStatus;
};

export type CreateLoungeEntryNotificationInput = {
  loungeEntryId: Scalars["ID"]["input"];
  notifyAt: Scalars["DateTime"]["input"];
};

export type CreateLoungePayload = {
  airport: AirportReferenceInput;
  amenities: Scalars["String"]["input"];
  checkoutId?: InputMaybe<Scalars["String"]["input"]>;
  closeTime: Scalars["DateTime"]["input"];
  code: Scalars["String"]["input"];
  entryTypes: Array<EntryType>;
  externalId?: InputMaybe<Scalars["String"]["input"]>;
  gate: Scalars["String"]["input"];
  location: Scalars["String"]["input"];
  loungeTier: LoungeTierReferenceInput;
  maximumCapacity: Scalars["Int"]["input"];
  minimumAgeEntry: Scalars["Int"]["input"];
  name: Scalars["String"]["input"];
  openTime: Scalars["DateTime"]["input"];
  reservedSeats: Scalars["Int"]["input"];
  status: LoungeStatus;
};

export type CreateLoungeTierPayload = {
  name: Scalars["String"]["input"];
  status: LoungeTierStatus;
  tier: Scalars["Int"]["input"];
};

export type CreateRuleEngineModelPayload = {
  model: Scalars["JSONObject"]["input"];
  ruleEngine: RuleEngineReferenceInput;
};

export type CreateRuleEnginePayload = {
  name: Scalars["String"]["input"];
  type: Scalars["String"]["input"];
};

export type CreateSettlementChargeRuleInput = {
  airlineCarrier?: InputMaybe<Scalars["String"]["input"]>;
  billedLocationCode?: InputMaybe<Scalars["Int"]["input"]>;
  billingAirlineId?: InputMaybe<Scalars["Int"]["input"]>;
  billingLocationCode?: InputMaybe<Scalars["Int"]["input"]>;
  contractNumber?: InputMaybe<Scalars["String"]["input"]>;
  departureAirport?: InputMaybe<AirportByCodeInput>;
  loungeCode?: InputMaybe<Scalars["String"]["input"]>;
  loungeTier: Scalars["Int"]["input"];
  settlementCharge: SettlementChargeInput;
  settlementMethod?: InputMaybe<Scalars["String"]["input"]>;
  taxCode?: InputMaybe<Scalars["String"]["input"]>;
  unitOfMeasure?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateUserPayload = {
  credentials?: InputMaybe<UserCredentialsInput>;
  email: Scalars["String"]["input"];
  lounges: Array<UserLoungeInput>;
  name: Scalars["String"]["input"];
  profile: UserProfileInput;
  singleSignOn?: InputMaybe<Array<UserSingleSignOnInput>>;
  status: UserStatus;
};

export type CreateVipPassengerInput = {
  airport?: InputMaybe<AirportReference>;
  companyCode?: InputMaybe<Scalars["String"]["input"]>;
  date?: InputMaybe<Scalars["DateTime"]["input"]>;
  isPermanent: Scalars["Boolean"]["input"];
  loyaltyNumber?: InputMaybe<Scalars["String"]["input"]>;
  passengerName: Scalars["String"]["input"];
  recordLocator?: InputMaybe<Scalars["String"]["input"]>;
  type: Scalars["String"]["input"];
};

export type Endpoint = {
  __typename?: "Endpoint";
  name: Scalars["String"]["output"];
  sdl?: Maybe<Scalars["String"]["output"]>;
  url: Scalars["String"]["output"];
};

export enum EntryType {
  Agent = "AGENT",
  Egate = "EGATE",
}

export type EvaluateRuleEnginePayload = {
  input: Scalars["JSONObject"]["input"];
  type: Scalars["String"]["input"];
};

export type ExportResult = {
  __typename?: "ExportResult";
  urlPath: Scalars["String"]["output"];
};

export type FlightSegment = {
  __typename?: "FlightSegment";
  arrival: FlightSegmentArrival;
  cabinCode?: Maybe<Scalars["String"]["output"]>;
  departure: FlightSegmentDeparture;
  match?: Maybe<Scalars["Boolean"]["output"]>;
  number: Scalars["String"]["output"];
  operatingAirline?: Maybe<Company>;
  operatorCarrierCode: Scalars["String"]["output"];
  seats: Array<TravelerSeat>;
};

export type FlightSegmentArrival = {
  __typename?: "FlightSegmentArrival";
  airport: AirportByCode;
  gate?: Maybe<Scalars["String"]["output"]>;
  scheduledTime?: Maybe<Scalars["DateTime"]["output"]>;
  terminal?: Maybe<Scalars["String"]["output"]>;
};

export type FlightSegmentDeparture = {
  __typename?: "FlightSegmentDeparture";
  airport: AirportByCode;
  boardTime?: Maybe<Scalars["DateTime"]["output"]>;
  gate?: Maybe<Scalars["String"]["output"]>;
  scheduledTime?: Maybe<Scalars["DateTime"]["output"]>;
  terminal?: Maybe<Scalars["String"]["output"]>;
};

export type GuestFromBoardingPassInput = {
  boardingPassBarcode: Scalars["String"]["input"];
  useOneTimePass?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type GuestFromRecordLocatorInput = {
  entryId: Scalars["ID"]["input"];
  useOneTimePass?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ImportInput = {
  urlPath: Scalars["String"]["input"];
};

export type ImportResult = {
  __typename?: "ImportResult";
  changedItems: Scalars["Int"]["output"];
  errorItems: Scalars["Int"]["output"];
  errors: Array<ImportValidationError>;
  newItems: Scalars["Int"]["output"];
  success: Scalars["Boolean"]["output"];
  unchangedItems: Scalars["Int"]["output"];
};

export type ImportValidationError = {
  __typename?: "ImportValidationError";
  itemId: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

export type InitiateSingleSignOnLogin = {
  __typename?: "InitiateSingleSignOnLogin";
  redirectUrl: Scalars["URL"]["output"];
};

export type InitiateSingleSignOnLoginPayload = {
  authenticationOptionId: Scalars["String"]["input"];
  type: SsoType;
};

export type InviteUserPayload = {
  email: Scalars["EmailAddress"]["input"];
  superadmin?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type LoginPayload = {
  email: Scalars["EmailAddress"]["input"];
  password: Scalars["String"]["input"];
};

export type Lounge = {
  __typename?: "Lounge";
  airport: Airport;
  amenities: Scalars["String"]["output"];
  checkoutId?: Maybe<Scalars["String"]["output"]>;
  closeTime: Scalars["DateTime"]["output"];
  code: Scalars["String"]["output"];
  company: Company;
  currentOneTimePassStatus?: Maybe<LoungeOneTimePassStatus>;
  entryTypes: Array<EntryType>;
  externalId?: Maybe<Scalars["String"]["output"]>;
  gate: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  location: Scalars["String"]["output"];
  loungeTier?: Maybe<LoungeTier>;
  maximumCapacity: Scalars["Int"]["output"];
  minimumAgeEntry: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
  oneTimePassStatus?: Maybe<Array<Maybe<LoungeOneTimePassStatus>>>;
  openTime: Scalars["DateTime"]["output"];
  reservedSeats: Scalars["Int"]["output"];
  status: LoungeStatus;
};

export type LoungeEntry = {
  __typename?: "LoungeEntry";
  agentName?: Maybe<Scalars["String"]["output"]>;
  barcode?: Maybe<Scalars["String"]["output"]>;
  entryTime: Scalars["DateTime"]["output"];
  exitTime?: Maybe<Scalars["DateTime"]["output"]>;
  flight: LoungeEntryFlight;
  flights: Array<LoungeEntryFlight>;
  guests: LoungeEntryGuestInformation;
  id: Scalars["ID"]["output"];
  initialStatus?: Maybe<PassengerLoungeEntryStatus>;
  isNonRev?: Maybe<Scalars["Boolean"]["output"]>;
  lounge: Lounge;
  offerCode?: Maybe<Scalars["String"]["output"]>;
  offerType?: Maybe<Scalars["String"]["output"]>;
  otpUsed?: Maybe<Scalars["Boolean"]["output"]>;
  otpUsedType?: Maybe<Scalars["String"]["output"]>;
  overriden?: Maybe<LoungeEntryOverrideInformation>;
  parentEntry?: Maybe<LoungeEntry>;
  passenger: LoungeEntryPassenger;
  passengerNeeds: LoungeEntrySpecialNeed;
  passengersCheckedIn: Scalars["Int"]["output"];
  recordLocator: Scalars["String"]["output"];
  reentryTime?: Maybe<Scalars["DateTime"]["output"]>;
  ruleEngineDecisions?: Maybe<Array<Maybe<RuleEngineDecision>>>;
  sourceType?: Maybe<Scalars["String"]["output"]>;
  status: PassengerLoungeEntryStatus;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type LoungeEntryEligibility = {
  __typename?: "LoungeEntryEligibility";
  greetingMessage?: Maybe<Scalars["String"]["output"]>;
  guests?: Maybe<LoungeEntryEligibilityGuestResult>;
  note?: Maybe<Scalars["String"]["output"]>;
  reason?: Maybe<Scalars["String"]["output"]>;
  status: LoungeEntryEligibilityStatusEnum;
  subType?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type LoungeEntryEligibilityGuestResult = {
  __typename?: "LoungeEntryEligibilityGuestResult";
  allowedQuantity?: Maybe<Scalars["Int"]["output"]>;
  guestType?: Maybe<LoungeEntryEligibilityGuestTypeEnum>;
};

export enum LoungeEntryEligibilityGuestTypeEnum {
  Family = "Family",
  SameFlight = "SameFlight",
}

export type LoungeEntryEligibilityResult = {
  __typename?: "LoungeEntryEligibilityResult";
  id: Scalars["ID"]["output"];
  referenceId: Scalars["String"]["output"];
  results: Array<LoungeEntryEligibility>;
};

export enum LoungeEntryEligibilityStatusEnum {
  Accept = "Accept",
  Decline = "Decline",
  PromptAgent = "PromptAgent",
}

export type LoungeEntryFilterInput = {
  airportCode?: InputMaybe<Scalars["String"]["input"]>;
  cabinRuleHit?: InputMaybe<Scalars["Boolean"]["input"]>;
  endDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  entryStatus?: InputMaybe<Array<PassengerLoungeEntryStatus>>;
  entryTimeFrom?: InputMaybe<Scalars["DateTime"]["input"]>;
  entryTimeTo?: InputMaybe<Scalars["DateTime"]["input"]>;
  flightDepartureTimeFrom?: InputMaybe<Scalars["DateTime"]["input"]>;
  flightNumber?: InputMaybe<Scalars["String"]["input"]>;
  flightOperators?: InputMaybe<Array<Scalars["String"]["input"]>>;
  frequentFlyerRuleHit?: InputMaybe<Scalars["Boolean"]["input"]>;
  guestStatus?: InputMaybe<Array<PassengerLoungeEntryStatus>>;
  hasGuests?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasOverride?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasSpecialRequests?: InputMaybe<Scalars["Boolean"]["input"]>;
  loungeIds?: InputMaybe<Array<Scalars["String"]["input"]>>;
  membershipRuleHit?: InputMaybe<Scalars["Boolean"]["input"]>;
  otpUsed?: InputMaybe<Scalars["Boolean"]["input"]>;
  query?: InputMaybe<Scalars["String"]["input"]>;
  specialRequestsOnly?: InputMaybe<Scalars["Boolean"]["input"]>;
  startDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Array<PassengerLoungeEntryStatus>>;
};

export type LoungeEntryFlight = {
  __typename?: "LoungeEntryFlight";
  arrivalAirport?: Maybe<Scalars["String"]["output"]>;
  compartmentCode?: Maybe<Scalars["String"]["output"]>;
  departureAirport?: Maybe<Scalars["String"]["output"]>;
  departureTime: Scalars["DateTime"]["output"];
  match: Scalars["Boolean"]["output"];
  number: Scalars["String"]["output"];
  operatorCarrierCode: Scalars["String"]["output"];
  seatNumber?: Maybe<Scalars["String"]["output"]>;
};

export type LoungeEntryGuestInformation = {
  __typename?: "LoungeEntryGuestInformation";
  allowedQuantity: Scalars["Int"]["output"];
  guestSlotsUsed: Scalars["Int"]["output"];
  guestType?: Maybe<Scalars["String"]["output"]>;
  list: Array<LoungeEntry>;
};

export type LoungeEntryMembership = {
  __typename?: "LoungeEntryMembership";
  greetingMessage?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  subType?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
};

export type LoungeEntryNotification = {
  __typename?: "LoungeEntryNotification";
  assignedAt?: Maybe<Scalars["DateTime"]["output"]>;
  assignedTo?: Maybe<User>;
  completedAt?: Maybe<Scalars["DateTime"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  loungeEntry: LoungeEntry;
  notifyAt: Scalars["DateTime"]["output"];
  status: LoungeEntryNotificationStatus;
};

export type LoungeEntryNotificationFilterInput = {
  loungeId?: InputMaybe<Scalars["String"]["input"]>;
  notifyAtFrom?: InputMaybe<Scalars["DateTime"]["input"]>;
  notifyAtTo?: InputMaybe<Scalars["DateTime"]["input"]>;
  status?: InputMaybe<Array<LoungeEntryNotificationStatus>>;
};

export type LoungeEntryNotificationQueryResult = {
  __typename?: "LoungeEntryNotificationQueryResult";
  pagination: Pagination;
  results: Array<LoungeEntryNotification>;
  totalCount: Scalars["Int"]["output"];
};

export enum LoungeEntryNotificationStatus {
  Assigned = "ASSIGNED",
  Completed = "COMPLETED",
  Created = "CREATED",
}

export type LoungeEntryOfferPurchasedInput = {
  entryId: Scalars["ID"]["input"];
  offerCode: Scalars["String"]["input"];
  offerType?: InputMaybe<Scalars["String"]["input"]>;
};

export type LoungeEntryOverrideInformation = {
  __typename?: "LoungeEntryOverrideInformation";
  note?: Maybe<Scalars["String"]["output"]>;
  overridenAt?: Maybe<Scalars["DateTime"]["output"]>;
  overridenBy?: Maybe<User>;
  reason?: Maybe<Scalars["String"]["output"]>;
};

export type LoungeEntryOverrideInput = {
  id: Scalars["ID"]["input"];
  note?: InputMaybe<Scalars["String"]["input"]>;
  reason?: InputMaybe<Scalars["String"]["input"]>;
  status: PassengerLoungeEntryStatus;
};

export type LoungeEntryPassenger = {
  __typename?: "LoungeEntryPassenger";
  firstName: Scalars["String"]["output"];
  lastName: Scalars["String"]["output"];
  loyalty?: Maybe<PassengerLoungeEntryLoyalty>;
  memberships: Array<Maybe<LoungeEntryMembership>>;
};

export type LoungeEntryPassengerInput = {
  firstName: Scalars["String"]["input"];
  isNonRev?: InputMaybe<Scalars["Boolean"]["input"]>;
  lastName: Scalars["String"]["input"];
  loyaltyNumber?: InputMaybe<Scalars["String"]["input"]>;
  recordLocator: Scalars["String"]["input"];
};

export type LoungeEntryQueryResult = {
  __typename?: "LoungeEntryQueryResult";
  guestsCount: Scalars["Int"]["output"];
  pagination: Pagination;
  passengersCount: Scalars["Int"]["output"];
  results: Array<LoungeEntry>;
  totalCount: Scalars["Int"]["output"];
};

export type LoungeEntryReference = {
  id: Scalars["ID"]["input"];
};

export enum LoungeEntrySortField {
  EntryTime = "ENTRY_TIME",
  FirstName = "FIRST_NAME",
  LastName = "LAST_NAME",
}

export type LoungeEntrySortInput = {
  field: LoungeEntrySortField;
  order: SortOrder;
};

export type LoungeEntrySpecialNeed = {
  __typename?: "LoungeEntrySpecialNeed";
  additionalInfo?: Maybe<Scalars["JSONObject"]["output"]>;
  note?: Maybe<Scalars["String"]["output"]>;
  specialNeeds: Array<Maybe<SpecialNeed>>;
};

export type LoungeEntrySpecialNeedInput = {
  additionalInfo?: InputMaybe<Scalars["JSONObject"]["input"]>;
  id: Scalars["ID"]["input"];
  note?: InputMaybe<Scalars["String"]["input"]>;
  specialNeeds?: InputMaybe<Array<SpecialNeedReferenceInput>>;
};

export type LoungeFilterInput = {
  airportId?: InputMaybe<Scalars["Int"]["input"]>;
  code?: InputMaybe<Scalars["JSONObject"]["input"]>;
  companyId?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LoungeOneTimePassStatus = {
  __typename?: "LoungeOneTimePassStatus";
  id: Scalars["ID"]["output"];
  status: OneTimePassStatus;
};

export type LoungeQueryResult = {
  __typename?: "LoungeQueryResult";
  pagination: Pagination;
  results: Array<Lounge>;
  totalCount: Scalars["Int"]["output"];
};

export enum LoungeStatus {
  Active = "ACTIVE",
  Deleted = "DELETED",
  Inactive = "INACTIVE",
}

export type LoungeTier = {
  __typename?: "LoungeTier";
  company: Company;
  id: Scalars["ID"]["output"];
  lounges: Array<Lounge>;
  name: Scalars["String"]["output"];
  status: LoungeTierStatus;
  tier: Scalars["Int"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
};

export type LoungeTierFilterInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<LoungeTierStatus>;
  tier?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LoungeTierQueryResult = {
  __typename?: "LoungeTierQueryResult";
  pagination: Pagination;
  results: Array<LoungeTier>;
  totalCount: Scalars["Int"]["output"];
};

export type LoungeTierReferenceInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export enum LoungeTierStatus {
  Active = "ACTIVE",
  Deleted = "DELETED",
  Inactive = "INACTIVE",
}

export type LoyaltyBalance = {
  __typename?: "LoyaltyBalance";
  amount: Scalars["Int"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  addGuestsFromBoardingPass: Array<LoungeEntry>;
  addGuestsFromRecordLocator: Array<LoungeEntry>;
  applyConsolidatedTagRuleEngineMetadata: ConsolidatedTagRuleEngine;
  assignLoungeEntryNotification: LoungeEntryNotification;
  checkInLoungeEntry: LoungeEntry;
  completeLoungeEntryNotification: LoungeEntryNotification;
  createCompany: Company;
  createCompanyGroup: CompanyGroup;
  createLounge: Lounge;
  createLoungeEntryNotification: LoungeEntryNotification;
  createLoungeTier: LoungeTier;
  createProfile: Profile;
  createRuleEngine: RuleEngine;
  createRuleEngineModel: RuleEngineModelMeta;
  createSettlementChargeRule: SettlementChargeRule;
  createUser?: Maybe<User>;
  createVipPassenger: VipPassenger;
  deleteCompany: Scalars["Boolean"]["output"];
  deleteCompanyGroup: Scalars["Boolean"]["output"];
  deleteUser: Scalars["Boolean"]["output"];
  exportLounges: ExportResult;
  exportUsers: ExportResult;
  generateSettlementReport: ExportResult;
  importLounges: ImportResult;
  importUsers: ImportResult;
  initiateSingleSignOnLogin: InitiateSingleSignOnLogin;
  inviteUser: Scalars["Boolean"]["output"];
  login: AuthorizationToken;
  logout?: Maybe<Scalars["Boolean"]["output"]>;
  overrideGuestsFromBoardingPass: Array<LoungeEntry>;
  overrideLoungeEntry: LoungeEntry;
  passengerLoungeEntry: PassengerLoungeEntryResponse;
  paymentToken: PaymentTokenResult;
  placeOrder: PlaceOrderResult;
  redeemOneTimePassByBarcode: RedeemOneTimePassResponse;
  redeemOneTimePassByLoyaltyNumber: RedeemOneTimePassResponse;
  refreshToken: AuthorizationToken;
  register: User;
  reloadAllEndpoints: ReloadAllEndpointsResult;
  removeGuest: LoungeEntry;
  removeLounge: Scalars["Boolean"]["output"];
  removeLoungeTier: Scalars["Boolean"]["output"];
  removeProfile: Scalars["Boolean"]["output"];
  removeSettlementChargeRule: RemoveResult;
  removeVipPassenger: Scalars["Boolean"]["output"];
  requestPasswordReset: Scalars["Boolean"]["output"];
  resetPassword: Scalars["Boolean"]["output"];
  sendOrderReceipt: Scalars["Boolean"]["output"];
  setExitTimeToLoungeEntry: LoungeEntry;
  setLoungeOneTimePassStatus: LoungeOneTimePassStatus;
  setOfferPurchasedForLoungeEntry: LoungeEntry;
  setSpecialNeedsToLoungeEntry: LoungeEntry;
  singleSignOnLogin?: Maybe<AuthorizationToken>;
  switchMainPassenger: LoungeEntry;
  unassignLoungeEntryNotification: LoungeEntryNotification;
  updateCompany: Company;
  updateCompanyGroup: CompanyGroup;
  updateConsolidatedTagRuleEngine: ConsolidatedTagRuleEngine;
  updateLounge: Lounge;
  updateLoungeTier: LoungeTier;
  updateProfile: Profile;
  updateRuleEngine: RuleEngine;
  updateSettlementChargeRule: SettlementChargeRule;
  updateUser?: Maybe<User>;
  updateVipPassenger: VipPassenger;
  uploadBulkImportFile: AssetBulkFile;
  uploadImage: AssetImage;
};

export type MutationAddGuestsFromBoardingPassArgs = {
  companyId: Scalars["String"]["input"];
  input: AddGuestsFromBoardingPassInput;
};

export type MutationAddGuestsFromRecordLocatorArgs = {
  companyId: Scalars["String"]["input"];
  input: AddGuestsFromRecordLocatorInput;
};

export type MutationApplyConsolidatedTagRuleEngineMetadataArgs = {
  companyId: Scalars["String"]["input"];
  payload: ApplyConsolidatedTagRuleEngineMetadataPayload;
};

export type MutationAssignLoungeEntryNotificationArgs = {
  companyId: Scalars["String"]["input"];
  loungeEntryNotificationId: Scalars["ID"]["input"];
};

export type MutationCheckInLoungeEntryArgs = {
  companyId: Scalars["String"]["input"];
  input: CheckInLoungeEntryInput;
};

export type MutationCompleteLoungeEntryNotificationArgs = {
  companyId: Scalars["String"]["input"];
  loungeEntryNotificationId: Scalars["ID"]["input"];
};

export type MutationCreateCompanyArgs = {
  input: CreateCompanyPayload;
};

export type MutationCreateCompanyGroupArgs = {
  input: CreateCompanyGroupPayload;
};

export type MutationCreateLoungeArgs = {
  companyId: Scalars["String"]["input"];
  input: CreateLoungePayload;
};

export type MutationCreateLoungeEntryNotificationArgs = {
  companyId: Scalars["String"]["input"];
  input: CreateLoungeEntryNotificationInput;
};

export type MutationCreateLoungeTierArgs = {
  companyId: Scalars["String"]["input"];
  input: CreateLoungeTierPayload;
};

export type MutationCreateProfileArgs = {
  companyId: Scalars["String"]["input"];
  input: ProfileInput;
};

export type MutationCreateRuleEngineArgs = {
  companyId: Scalars["String"]["input"];
  payload: CreateRuleEnginePayload;
};

export type MutationCreateRuleEngineModelArgs = {
  companyId: Scalars["String"]["input"];
  payload: CreateRuleEngineModelPayload;
};

export type MutationCreateSettlementChargeRuleArgs = {
  companyId: Scalars["String"]["input"];
  input: CreateSettlementChargeRuleInput;
};

export type MutationCreateUserArgs = {
  companyId: Scalars["String"]["input"];
  payload: CreateUserPayload;
};

export type MutationCreateVipPassengerArgs = {
  companyId: Scalars["String"]["input"];
  input: CreateVipPassengerInput;
};

export type MutationDeleteCompanyArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteCompanyGroupArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteUserArgs = {
  companyId: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
};

export type MutationExportLoungesArgs = {
  companyId?: InputMaybe<Scalars["String"]["input"]>;
  pagination?: InputMaybe<PaginationInput>;
};

export type MutationExportUsersArgs = {
  companyId?: InputMaybe<Scalars["String"]["input"]>;
  pagination?: InputMaybe<PaginationInput>;
};

export type MutationGenerateSettlementReportArgs = {
  companyId: Scalars["String"]["input"];
  month: Scalars["Int"]["input"];
  year: Scalars["Int"]["input"];
};

export type MutationImportLoungesArgs = {
  companyId?: InputMaybe<Scalars["String"]["input"]>;
  payload: ImportInput;
};

export type MutationImportUsersArgs = {
  companyId?: InputMaybe<Scalars["String"]["input"]>;
  payload: ImportInput;
};

export type MutationInitiateSingleSignOnLoginArgs = {
  companyId?: InputMaybe<Scalars["String"]["input"]>;
  input: InitiateSingleSignOnLoginPayload;
};

export type MutationInviteUserArgs = {
  companyId?: InputMaybe<Scalars["String"]["input"]>;
  payload: InviteUserPayload;
};

export type MutationLoginArgs = {
  companyId?: InputMaybe<Scalars["String"]["input"]>;
  payload: LoginPayload;
};

export type MutationOverrideGuestsFromBoardingPassArgs = {
  companyId: Scalars["String"]["input"];
  input: OverrideGuestsFromBoardingPassInput;
};

export type MutationOverrideLoungeEntryArgs = {
  companyId: Scalars["String"]["input"];
  input: LoungeEntryOverrideInput;
};

export type MutationPassengerLoungeEntryArgs = {
  companyId: Scalars["String"]["input"];
  input: PassengerLoungeEntryInput;
  loungeId: Scalars["String"]["input"];
};

export type MutationPaymentTokenArgs = {
  companyId: Scalars["String"]["input"];
  input: PaymentTokenInput;
};

export type MutationPlaceOrderArgs = {
  companyId: Scalars["String"]["input"];
  loungeId: Scalars["String"]["input"];
  order: PlaceOrderInput;
};

export type MutationRedeemOneTimePassByBarcodeArgs = {
  companyId: Scalars["String"]["input"];
  entryId: Scalars["String"]["input"];
  input: RedeemOneTimePassByBarcodeInput;
  loungeId: Scalars["String"]["input"];
};

export type MutationRedeemOneTimePassByLoyaltyNumberArgs = {
  companyId: Scalars["String"]["input"];
  input: RedeemOneTimePassByLoyaltyNumberInput;
  loungeId: Scalars["String"]["input"];
};

export type MutationRegisterArgs = {
  payload: RegisterUserPayload;
};

export type MutationRemoveGuestArgs = {
  companyId: Scalars["String"]["input"];
  entryId: Scalars["String"]["input"];
  parentEntryId: Scalars["ID"]["input"];
};

export type MutationRemoveLoungeArgs = {
  companyId: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
};

export type MutationRemoveLoungeTierArgs = {
  companyId: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
};

export type MutationRemoveProfileArgs = {
  companyId: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
};

export type MutationRemoveSettlementChargeRuleArgs = {
  companyId: Scalars["String"]["input"];
  id: Scalars["Int"]["input"];
};

export type MutationRemoveVipPassengerArgs = {
  companyId: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
};

export type MutationRequestPasswordResetArgs = {
  companyId?: InputMaybe<Scalars["String"]["input"]>;
  payload: RequestPasswordResetPayload;
};

export type MutationResetPasswordArgs = {
  companyId?: InputMaybe<Scalars["String"]["input"]>;
  payload: ResetPasswordPayload;
};

export type MutationSendOrderReceiptArgs = {
  companyId: Scalars["String"]["input"];
  input: SendOrderReceiptInput;
};

export type MutationSetExitTimeToLoungeEntryArgs = {
  companyId: Scalars["String"]["input"];
  exitTime: Scalars["DateTime"]["input"];
  id: Scalars["ID"]["input"];
};

export type MutationSetLoungeOneTimePassStatusArgs = {
  companyId?: InputMaybe<Scalars["String"]["input"]>;
  loungeId: Scalars["String"]["input"];
  status: OneTimePassStatus;
};

export type MutationSetOfferPurchasedForLoungeEntryArgs = {
  companyId: Scalars["String"]["input"];
  input: SetOffersPurchasedForLoungeEntryInput;
};

export type MutationSetSpecialNeedsToLoungeEntryArgs = {
  companyId: Scalars["String"]["input"];
  input: LoungeEntrySpecialNeedInput;
};

export type MutationSingleSignOnLoginArgs = {
  companyId?: InputMaybe<Scalars["String"]["input"]>;
  payload: SingleSignOnLoginPayload;
};

export type MutationSwitchMainPassengerArgs = {
  companyId: Scalars["String"]["input"];
  entryId: Scalars["String"]["input"];
};

export type MutationUnassignLoungeEntryNotificationArgs = {
  companyId: Scalars["String"]["input"];
  loungeEntryNotificationId: Scalars["ID"]["input"];
};

export type MutationUpdateCompanyArgs = {
  id: Scalars["ID"]["input"];
  input: UpdateCompanyPayload;
};

export type MutationUpdateCompanyGroupArgs = {
  id: Scalars["ID"]["input"];
  input: UpdateCompanyGroupPayload;
};

export type MutationUpdateConsolidatedTagRuleEngineArgs = {
  companyId: Scalars["String"]["input"];
  payload: UpdateConsolidatedTagRuleEnginePayload;
};

export type MutationUpdateLoungeArgs = {
  companyId: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
  input: UpdateLoungePayload;
};

export type MutationUpdateLoungeTierArgs = {
  companyId: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
  input: UpdateLoungeTierPayload;
};

export type MutationUpdateProfileArgs = {
  companyId: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
  input: ProfileInput;
};

export type MutationUpdateRuleEngineArgs = {
  companyId: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
  payload: UpdateRuleEnginePayload;
};

export type MutationUpdateSettlementChargeRuleArgs = {
  companyId: Scalars["String"]["input"];
  id: Scalars["Int"]["input"];
  input: UpdateSettlementChargeRuleInput;
};

export type MutationUpdateUserArgs = {
  companyId: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
  payload: UpdateUserPayload;
};

export type MutationUpdateVipPassengerArgs = {
  companyId: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
  input: UpdateVipPassengerInput;
};

export type MutationUploadBulkImportFileArgs = {
  bulkImport: BulkImportFileInput;
  companyId?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUploadImageArgs = {
  image: AssetImageInput;
};

export type Offer = {
  __typename?: "Offer";
  code: Scalars["String"]["output"];
  features: Array<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  prices: Array<Maybe<OfferPrice>>;
  status: OfferStatus;
};

export type OfferFilterInput = {
  priceChannel?: InputMaybe<Scalars["String"]["input"]>;
  recordLocator: Scalars["String"]["input"];
};

export type OfferPrice = {
  __typename?: "OfferPrice";
  amount: Scalars["Float"]["output"];
  currencyCode: Scalars["String"]["output"];
  precision: Scalars["Int"]["output"];
};

export type OfferQueryResult = {
  __typename?: "OfferQueryResult";
  pagination: Pagination;
  results: Array<Offer>;
  totalCount: Scalars["Int"]["output"];
};

export enum OfferStatus {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
}

export enum OneTimePassStatus {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
}

export type OrderPaymentInput = {
  creditCard?: InputMaybe<SelectedCardInput>;
  paymentType: PaymentType;
  total: OrderTotalInput;
};

export type OrderTotalInput = {
  amount: Scalars["Float"]["input"];
  currencyCode: Scalars["String"]["input"];
};

export type OverrideGuestFromBoardingPassInput = {
  boardingPassBarcode: Scalars["String"]["input"];
};

export type OverrideGuestsFromBoardingPassInput = {
  guests: Array<OverrideGuestFromBoardingPassInput>;
  mainPassengerEntryId: Scalars["ID"]["input"];
};

export type Pagination = {
  __typename?: "Pagination";
  limit: Scalars["Int"]["output"];
  offset: Scalars["Int"]["output"];
};

export type PaginationInput = {
  limit: Scalars["Int"]["input"];
  offset: Scalars["Int"]["input"];
};

export type Passenger = {
  __typename?: "Passenger";
  entry: LoungeEntry;
  entryDecisions: Array<Maybe<PassengerEntryDecision>>;
  memberships: Array<Maybe<PassengerMembership>>;
  referenceId: Scalars["String"]["output"];
};

export type PassengerCreditCard = {
  __typename?: "PassengerCreditCard";
  expiration: Scalars["String"]["output"];
  lastFourDigits: Scalars["String"]["output"];
  nameOnCard: Scalars["String"]["output"];
  token: Scalars["String"]["output"];
};

export type PassengerCreditCards = {
  __typename?: "PassengerCreditCards";
  pagination: Pagination;
  results: Array<PassengerCreditCard>;
  totalCount: Scalars["Int"]["output"];
};

export type PassengerCreditCardsInput = {
  loyaltyNumber: Scalars["String"]["input"];
  recordLocator: Scalars["String"]["input"];
};

export type PassengerEmail = {
  __typename?: "PassengerEmail";
  email: Scalars["String"]["output"];
};

export type PassengerEmails = {
  __typename?: "PassengerEmails";
  pagination: Pagination;
  results: Array<PassengerEmail>;
  totalCount: Scalars["Int"]["output"];
};

export type PassengerEmailsInput = {
  loyaltyNumber: Scalars["String"]["input"];
};

export enum PassengerEntranceGuestTypeEnum {
  Family = "Family",
  SameFlight = "SameFlight",
}

export enum PassengerEntranceStatusEnum {
  Accept = "Accept",
  Decline = "Decline",
  PromptAgent = "PromptAgent",
}

export type PassengerEntryDecision = {
  __typename?: "PassengerEntryDecision";
  greetingMessage?: Maybe<Scalars["String"]["output"]>;
  guests?: Maybe<PassengerEntryDecisionGuest>;
  note?: Maybe<Scalars["String"]["output"]>;
  reason?: Maybe<Scalars["String"]["output"]>;
  status: PassengerEntranceStatusEnum;
  subType?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type PassengerEntryDecisionGuest = {
  __typename?: "PassengerEntryDecisionGuest";
  allowedQuantity?: Maybe<Scalars["Int"]["output"]>;
  guestType?: Maybe<PassengerEntranceGuestTypeEnum>;
};

export type PassengerLoungeEntryInput = {
  boardingPassBarcode?: InputMaybe<Scalars["String"]["input"]>;
  passenger?: InputMaybe<LoungeEntryPassengerInput>;
  skipLoadingOneTimePasses?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PassengerLoungeEntryLoyalty = {
  __typename?: "PassengerLoungeEntryLoyalty";
  frequentFlyerDesignator?: Maybe<Scalars["String"]["output"]>;
  frequentFlyerNumber?: Maybe<Scalars["String"]["output"]>;
};

export type PassengerLoungeEntryResponse = {
  __typename?: "PassengerLoungeEntryResponse";
  isLoungeReentry: Scalars["Boolean"]["output"];
  passengerNameRecord: PassengerNameRecord;
  passengers: Array<Passenger>;
};

export enum PassengerLoungeEntryStatus {
  Accepted = "ACCEPTED",
  Denied = "DENIED",
  PreAccepted = "PRE_ACCEPTED",
  RegisteredGuest = "REGISTERED_GUEST",
  WaitingAgentAction = "WAITING_AGENT_ACTION",
}

export type PassengerLoyalty = {
  __typename?: "PassengerLoyalty";
  balance: LoyaltyBalance;
  loyaltyNumber: Scalars["String"]["output"];
};

export type PassengerLoyaltyInput = {
  loyaltyNumber: Scalars["String"]["input"];
};

export type PassengerMembership = {
  __typename?: "PassengerMembership";
  greetingMessage?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  subType?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
};

export type PassengerMembershipResult = {
  __typename?: "PassengerMembershipResult";
  id: Scalars["ID"]["output"];
  referenceId: Scalars["String"]["output"];
  results: Array<PassengerMembership>;
};

export type PassengerNameRecord = {
  __typename?: "PassengerNameRecord";
  flights?: Maybe<Array<FlightSegment>>;
  recordLocator: Scalars["String"]["output"];
  travelers: Array<Traveler>;
};

export type PassengerNameRecordByLoyaltyNumberFilter = {
  loyaltyNumber: Scalars["String"]["input"];
};

export type PassengerNameRecordByNameAndFlightFilter = {
  departureAirportCode: Scalars["String"]["input"];
  departureDate: Scalars["DateTime"]["input"];
  flightNumber: Scalars["String"]["input"];
  lastName: Scalars["String"]["input"];
};

export type PassengerNameRecordByRecordLocatorFilter = {
  recordLocator: Scalars["String"]["input"];
};

export type PassengerOneTimePasses = {
  __typename?: "PassengerOneTimePasses";
  availablePasses?: Maybe<Scalars["Int"]["output"]>;
  loyaltyAirline: Scalars["String"]["output"];
  loyaltyNumber: Scalars["String"]["output"];
};

export type PassengerOneTimePassesInput = {
  loyaltyAirline: Scalars["String"]["input"];
  loyaltyNumber: Scalars["String"]["input"];
};

export type PaymentTokenInput = {
  payload: Scalars["JSONObject"]["input"];
  recordLocator: Scalars["String"]["input"];
};

export type PaymentTokenResult = {
  __typename?: "PaymentTokenResult";
  customProperties: Scalars["JSONObject"]["output"];
  token: Scalars["String"]["output"];
};

export enum PaymentType {
  CreditCard = "CREDIT_CARD",
  Miles = "MILES",
}

export type Permission = {
  __typename?: "Permission";
  code: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  shortName: Scalars["String"]["output"];
  status: PermissionStatus;
};

export type PermissionFilterInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<PermissionStatus>;
};

export enum PermissionStatus {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
}

export type PlaceOrderInput = {
  cart: Array<CartItemInput>;
  loungeEntryId: Scalars["String"]["input"];
  loyaltyNumber: Scalars["String"]["input"];
  payment: OrderPaymentInput;
  priceChannel?: InputMaybe<Scalars["String"]["input"]>;
  recordLocator: Scalars["String"]["input"];
};

export type PlaceOrderResult = {
  __typename?: "PlaceOrderResult";
  orderId: Scalars["String"]["output"];
};

export type Profile = {
  __typename?: "Profile";
  company: Company;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  permissions: Array<Permission>;
  status: ProfileStatus;
};

export type ProfileFilterInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProfileInput = {
  name: Scalars["String"]["input"];
  permissions: Array<ProfilePermissionInput>;
};

export type ProfilePermissionInput = {
  id: Scalars["ID"]["input"];
};

export type ProfileQueryResult = {
  __typename?: "ProfileQueryResult";
  pagination: Pagination;
  results: Array<Profile>;
  totalCount: Scalars["Int"]["output"];
};

export enum ProfileStatus {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
}

export type Query = {
  __typename?: "Query";
  airport: Airport;
  airports: AirportQueryResult;
  authenticationOptions: Array<AuthenticationOption>;
  companies: CompanyQueryResult;
  company: Company;
  companyByAgentAppUrl?: Maybe<Company>;
  companyGroup: CompanyGroup;
  companyGroups: CompanyGroupQueryResult;
  consolidatedTagRuleEngine: ConsolidatedTagRuleEngine;
  currentUser: User;
  endpoints: Array<Endpoint>;
  evaluateRuleEngine: Scalars["JSONObject"]["output"];
  lounge: Lounge;
  loungeEntries: LoungeEntryQueryResult;
  loungeEntry: LoungeEntry;
  loungeEntryEligibility: Array<LoungeEntryEligibilityResult>;
  loungeEntryNotifications?: Maybe<LoungeEntryNotificationQueryResult>;
  loungeTier: LoungeTier;
  loungeTiers: LoungeTierQueryResult;
  lounges: LoungeQueryResult;
  offers: OfferQueryResult;
  passengerCreditCards: PassengerCreditCards;
  passengerEmails: PassengerEmails;
  passengerLoyalty: PassengerLoyalty;
  passengerMemberships: Array<Maybe<PassengerMembershipResult>>;
  passengerNameRecordsByLoyaltyNumber: Array<PassengerNameRecord>;
  passengerNameRecordsByNameAndFlight: Array<PassengerNameRecord>;
  passengerNameRecordsByRecordLocator: Array<PassengerNameRecord>;
  passengerOneTimePasses: PassengerOneTimePasses;
  permissions: Array<Permission>;
  profile?: Maybe<Profile>;
  profiles: ProfileQueryResult;
  ruleEngineModel: RuleEngineModel;
  ruleEngineModels: RuleEngineModelQueryResult;
  ruleEngines: RuleEngineQueryResult;
  settlementChargeRule?: Maybe<SettlementChargeRule>;
  settlementChargeRules: SettlementChargeRuleQueryResult;
  specialNeeds: Array<SpecialNeed>;
  user?: Maybe<User>;
  users: UserQueryResult;
  vipPassenger?: Maybe<VipPassenger>;
  vipPassengers: VipPassengerQueryResult;
};

export type QueryAirportArgs = {
  filter: AirportUniqueFilterInput;
};

export type QueryAirportsArgs = {
  filter?: InputMaybe<AirportFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type QueryAuthenticationOptionsArgs = {
  companyId?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryCompaniesArgs = {
  filter?: InputMaybe<CompanyFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type QueryCompanyArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryCompanyByAgentAppUrlArgs = {
  agentAppUrl: Scalars["String"]["input"];
};

export type QueryCompanyGroupArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryCompanyGroupsArgs = {
  filter?: InputMaybe<CompanyGroupFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type QueryConsolidatedTagRuleEngineArgs = {
  companyId: Scalars["ID"]["input"];
};

export type QueryEvaluateRuleEngineArgs = {
  companyId: Scalars["String"]["input"];
  payload: EvaluateRuleEnginePayload;
};

export type QueryLoungeArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryLoungeEntriesArgs = {
  companyId: Scalars["String"]["input"];
  filter?: InputMaybe<LoungeEntryFilterInput>;
  loungeId?: InputMaybe<Scalars["String"]["input"]>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<LoungeEntrySortInput>;
};

export type QueryLoungeEntryArgs = {
  companyId: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
};

export type QueryLoungeEntryEligibilityArgs = {
  companyId: Scalars["String"]["input"];
  payloads: Array<RulesEnginePayload>;
};

export type QueryLoungeEntryNotificationsArgs = {
  companyId: Scalars["String"]["input"];
  filter?: InputMaybe<LoungeEntryNotificationFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type QueryLoungeTierArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryLoungeTiersArgs = {
  companyId?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<LoungeTierFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type QueryLoungesArgs = {
  companyId?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<LoungeFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type QueryOffersArgs = {
  companyId: Scalars["String"]["input"];
  filter: OfferFilterInput;
  loungeId: Scalars["String"]["input"];
};

export type QueryPassengerCreditCardsArgs = {
  companyId: Scalars["String"]["input"];
  input: PassengerCreditCardsInput;
};

export type QueryPassengerEmailsArgs = {
  companyId: Scalars["String"]["input"];
  input: PassengerEmailsInput;
};

export type QueryPassengerLoyaltyArgs = {
  companyId: Scalars["String"]["input"];
  input: PassengerLoyaltyInput;
};

export type QueryPassengerMembershipsArgs = {
  companyId: Scalars["String"]["input"];
  payloads: Array<RulesEnginePayload>;
};

export type QueryPassengerNameRecordsByLoyaltyNumberArgs = {
  filter: PassengerNameRecordByLoyaltyNumberFilter;
};

export type QueryPassengerNameRecordsByNameAndFlightArgs = {
  filter: PassengerNameRecordByNameAndFlightFilter;
};

export type QueryPassengerNameRecordsByRecordLocatorArgs = {
  filter: PassengerNameRecordByRecordLocatorFilter;
};

export type QueryPassengerOneTimePassesArgs = {
  companyId: Scalars["String"]["input"];
  input: PassengerOneTimePassesInput;
};

export type QueryPermissionsArgs = {
  filter?: InputMaybe<PermissionFilterInput>;
};

export type QueryProfileArgs = {
  companyId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
};

export type QueryProfilesArgs = {
  companyId?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<ProfileFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type QueryRuleEngineModelArgs = {
  companyId: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
};

export type QueryRuleEngineModelsArgs = {
  companyId?: InputMaybe<Scalars["ID"]["input"]>;
  filter?: InputMaybe<RuleEngineModelFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<RuleEngineSortInput>;
};

export type QueryRuleEnginesArgs = {
  companyId?: InputMaybe<Scalars["ID"]["input"]>;
  pagination?: InputMaybe<PaginationInput>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<RuleEngineSortInput>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  withModels?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QuerySettlementChargeRuleArgs = {
  companyId: Scalars["String"]["input"];
  id: Scalars["Int"]["input"];
};

export type QuerySettlementChargeRulesArgs = {
  companyId?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<SettlementChargeRuleFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type QuerySpecialNeedsArgs = {
  companyId: Scalars["String"]["input"];
};

export type QueryUserArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryUsersArgs = {
  companyId?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<UserFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type QueryVipPassengerArgs = {
  companyId: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
};

export type QueryVipPassengersArgs = {
  companyId: Scalars["String"]["input"];
  filter?: InputMaybe<VipPassengerFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<VipPassengerSortInput>;
};

export type RedeemOneTimePassByBarcodeInput = {
  barcode: Scalars["String"]["input"];
};

export type RedeemOneTimePassByLoyaltyNumberInput = {
  loungeEntries: Array<LoungeEntryReference>;
  loyaltyNumber: Scalars["String"]["input"];
};

export type RedeemOneTimePassResponse = {
  __typename?: "RedeemOneTimePassResponse";
  success: Scalars["Boolean"]["output"];
};

export enum ReentryWindowType {
  SameDay = "SAME_DAY",
  TimeWindow = "TIME_WINDOW",
}

export type RegisterUserPayload = {
  displayName: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  token: Scalars["JWT"]["input"];
};

export type ReloadAllEndpointsResult = {
  __typename?: "ReloadAllEndpointsResult";
  success: Scalars["Boolean"]["output"];
};

export type RemoveResult = {
  __typename?: "RemoveResult";
  id: Scalars["Int"]["output"];
};

export type RequestPasswordResetPayload = {
  email: Scalars["EmailAddress"]["input"];
};

export type ResetPasswordPayload = {
  password: Scalars["String"]["input"];
  token: Scalars["JWT"]["input"];
};

export type Rule = {
  __typename?: "Rule";
  description?: Maybe<Scalars["String"]["output"]>;
  endDate?: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["ID"]["output"];
  order: Scalars["Int"]["output"];
  startDate?: Maybe<Scalars["DateTime"]["output"]>;
  status: Scalars["String"]["output"];
  values: Array<RuleValue>;
};

export type RuleEngine = {
  __typename?: "RuleEngine";
  activeModelId?: Maybe<Scalars["ID"]["output"]>;
  company: Company;
  id: Scalars["ID"]["output"];
  models?: Maybe<Array<RuleEngineModel>>;
  name: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type RuleEngineDecision = {
  __typename?: "RuleEngineDecision";
  id: Scalars["ID"]["output"];
  input: Scalars["JSONObject"]["output"];
  model: Scalars["JSONObject"]["output"];
  output: Array<Scalars["JSONObject"]["output"]>;
  type: Scalars["String"]["output"];
};

export type RuleEngineModel = {
  __typename?: "RuleEngineModel";
  createdAt: Scalars["DateTime"]["output"];
  createdBy?: Maybe<User>;
  id: Scalars["ID"]["output"];
  isActive: Scalars["Boolean"]["output"];
  model: Scalars["JSONObject"]["output"];
  ruleEngine: RuleEngine;
  urlPath?: Maybe<Scalars["String"]["output"]>;
};

export type RuleEngineModelFilterInput = {
  search?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type RuleEngineModelMeta = {
  __typename?: "RuleEngineModelMeta";
  createdAt: Scalars["DateTime"]["output"];
  createdBy?: Maybe<User>;
  id: Scalars["ID"]["output"];
  isActive: Scalars["Boolean"]["output"];
  ruleEngine: RuleEngine;
  urlPath?: Maybe<Scalars["String"]["output"]>;
};

export type RuleEngineModelQueryResult = {
  __typename?: "RuleEngineModelQueryResult";
  pagination: Pagination;
  results: Array<RuleEngineModel>;
  totalCount: Scalars["Int"]["output"];
};

export type RuleEngineQueryResult = {
  __typename?: "RuleEngineQueryResult";
  pagination: Pagination;
  results: Array<RuleEngine>;
  totalCount: Scalars["Int"]["output"];
};

export type RuleEngineReferenceInput = {
  id: Scalars["ID"]["input"];
};

export enum RuleEngineSortField {
  CreatedAt = "CREATED_AT",
  Name = "NAME",
  Type = "TYPE",
}

export type RuleEngineSortInput = {
  direction: SortDirection;
  field: RuleEngineSortField;
};

export type RuleEngineTag = {
  __typename?: "RuleEngineTag";
  greetingMessage?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  order: Scalars["Int"]["output"];
  rules?: Maybe<Array<Rule>>;
  subType?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
};

export type RuleEngineTagGroup = {
  __typename?: "RuleEngineTagGroup";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  order: Scalars["Int"]["output"];
  tags?: Maybe<Array<RuleEngineTag>>;
};

export type RuleField = {
  __typename?: "RuleField";
  allowedOperators: Array<RuleOperator>;
  baseType: RuleFieldBaseType;
  id: Scalars["ID"]["output"];
  isArray: Scalars["Boolean"]["output"];
  name: Scalars["String"]["output"];
  order: Scalars["Int"]["output"];
  path: Scalars["String"]["output"];
  ruleEngines?: Maybe<Array<RuleEngine>>;
  typeConfig: Scalars["JSONObject"]["output"];
};

export enum RuleFieldBaseType {
  Boolean = "BOOLEAN",
  Datetime = "DATETIME",
  Number = "NUMBER",
  Picklist = "PICKLIST",
  String = "STRING",
}

export type RuleFieldGroup = {
  __typename?: "RuleFieldGroup";
  fields: Array<RuleField>;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  order: Scalars["Int"]["output"];
  type: RuleFieldGroupType;
};

export enum RuleFieldGroupType {
  Input = "INPUT",
  Output = "OUTPUT",
}

export type RuleInput = {
  description: Scalars["String"]["input"];
  endDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  order: Scalars["Int"]["input"];
  startDate: Scalars["DateTime"]["input"];
  status: Scalars["String"]["input"];
  values: Array<RuleValueInput>;
};

export type RuleOperand = {
  __typename?: "RuleOperand";
  type: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type RuleOperandInput = {
  type: Scalars["String"]["input"];
  value: Scalars["String"]["input"];
};

export enum RuleOperator {
  After = "AFTER",
  Before = "BEFORE",
  Between = "BETWEEN",
  Contains = "CONTAINS",
  EndsWith = "ENDS_WITH",
  Equals = "EQUALS",
  GreaterThan = "GREATER_THAN",
  GreaterThanOrEqual = "GREATER_THAN_OR_EQUAL",
  In = "IN",
  LessThan = "LESS_THAN",
  LessThanOrEqual = "LESS_THAN_OR_EQUAL",
  NotContains = "NOT_CONTAINS",
  NotEquals = "NOT_EQUALS",
  NotIn = "NOT_IN",
  OnOrAfter = "ON_OR_AFTER",
  OnOrBefore = "ON_OR_BEFORE",
  StartsWith = "STARTS_WITH",
}

export type RuleValue = {
  __typename?: "RuleValue";
  fieldId: Scalars["ID"]["output"];
  id: Scalars["ID"]["output"];
  leftOperand: RuleOperand;
  operator: RuleOperator;
  rightOperand?: Maybe<RuleOperand>;
};

export type RuleValueInput = {
  fieldId: Scalars["ID"]["input"];
  leftOperand: RuleOperandInput;
  operator: RuleOperator;
  rightOperand?: InputMaybe<RuleOperandInput>;
};

export type RulesEnginePayload = {
  referenceId: Scalars["String"]["input"];
  rulesInput: Scalars["JSONObject"]["input"];
};

export type SelectedCardInput = {
  customProperties: Scalars["JSONObject"]["input"];
  token: Scalars["String"]["input"];
};

export type SendOrderReceiptInput = {
  email: Scalars["String"]["input"];
  orderId: Scalars["String"]["input"];
};

export type SetOffersPurchasedForLoungeEntryInput = {
  mainLoungeEntryId?: InputMaybe<Scalars["ID"]["input"]>;
  offers: Array<LoungeEntryOfferPurchasedInput>;
};

export type SettlementCharge = {
  __typename?: "SettlementCharge";
  amount: Scalars["Float"]["output"];
  currencyCode: Scalars["String"]["output"];
};

export type SettlementChargeInput = {
  amount: Scalars["Float"]["input"];
  currencyCode: Scalars["String"]["input"];
};

export type SettlementChargeRule = {
  __typename?: "SettlementChargeRule";
  airlineCarrier?: Maybe<Scalars["String"]["output"]>;
  billedLocationCode?: Maybe<Scalars["Int"]["output"]>;
  billingAirlineId?: Maybe<Scalars["Int"]["output"]>;
  billingLocationCode?: Maybe<Scalars["Int"]["output"]>;
  company: Company;
  contractNumber?: Maybe<Scalars["String"]["output"]>;
  departureAirport?: Maybe<AirportByCode>;
  id: Scalars["Int"]["output"];
  loungeCode?: Maybe<Scalars["String"]["output"]>;
  loungeTier: Scalars["Int"]["output"];
  settlementCharge?: Maybe<SettlementCharge>;
  settlementMethod?: Maybe<Scalars["String"]["output"]>;
  taxCode?: Maybe<Scalars["String"]["output"]>;
  unitOfMeasure?: Maybe<Scalars["String"]["output"]>;
};

export type SettlementChargeRuleFilterInput = {
  airlineCarrier?: InputMaybe<Scalars["String"]["input"]>;
  departureAirport?: InputMaybe<AirportByCodeInput>;
  loungeTier?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type SettlementChargeRuleQueryResult = {
  __typename?: "SettlementChargeRuleQueryResult";
  pagination?: Maybe<Pagination>;
  results: Array<SettlementChargeRule>;
  totalCount: Scalars["Int"]["output"];
};

export type SingleSignOnLoginPayload = {
  token: Scalars["JWT"]["input"];
};

export enum SortDirection {
  Asc = "ASC",
  Desc = "DESC",
}

export enum SortOrder {
  Asc = "ASC",
  Desc = "DESC",
}

export type SpecialNeed = {
  __typename?: "SpecialNeed";
  code: Scalars["String"]["output"];
  companyId: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type SpecialNeedReferenceInput = {
  id: Scalars["ID"]["input"];
};

export enum SsoType {
  Saml = "SAML",
}

export type TagGroupInput = {
  name: Scalars["String"]["input"];
  order: Scalars["Int"]["input"];
  tags: Array<TagInput>;
};

export type TagInput = {
  greetingMessage: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  order: Scalars["Int"]["input"];
  rules: Array<RuleInput>;
  subType: Scalars["String"]["input"];
  type: Scalars["String"]["input"];
};

export type Traveler = {
  __typename?: "Traveler";
  firstName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lastName: Scalars["String"]["output"];
  loyalty?: Maybe<TravelerLoyalty>;
  match?: Maybe<Scalars["Boolean"]["output"]>;
  oneTimePasses?: Maybe<Scalars["Int"]["output"]>;
};

export type TravelerLoyalty = {
  __typename?: "TravelerLoyalty";
  airlineDesignator?: Maybe<Scalars["String"]["output"]>;
  number?: Maybe<Scalars["String"]["output"]>;
};

export type TravelerSeat = {
  __typename?: "TravelerSeat";
  seatNumber: Scalars["String"]["output"];
  travelerId: Scalars["String"]["output"];
};

export type UpdateCompanyGroupPayload = {
  companies: Array<CompanyReferenceInput>;
  darkBackgroundLogoUrl?: InputMaybe<Scalars["String"]["input"]>;
  lightBackgroundLogoUrl?: InputMaybe<Scalars["String"]["input"]>;
  logomarkUrl?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  status: CompanyStatus;
};

export type UpdateCompanyPayload = {
  code: Scalars["String"]["input"];
  darkBackgroundLogoUrl?: InputMaybe<Scalars["String"]["input"]>;
  egateReentryWindowMinutes?: InputMaybe<Scalars["Int"]["input"]>;
  lightBackgroundLogoUrl?: InputMaybe<Scalars["String"]["input"]>;
  logomarkUrl?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  partnerCompanyGroup?: InputMaybe<CompanyGroupReference>;
  reentryWindowMinutes?: InputMaybe<Scalars["Int"]["input"]>;
  reentryWindowType?: InputMaybe<ReentryWindowType>;
  reportsDedupingWindowMinutes?: InputMaybe<Scalars["Int"]["input"]>;
  shortName: Scalars["String"]["input"];
  status: CompanyStatus;
};

export type UpdateConsolidatedTagRuleEnginePayload = {
  tagGroups: Array<TagGroupInput>;
};

export type UpdateLoungePayload = {
  airport: AirportReferenceInput;
  amenities: Scalars["String"]["input"];
  checkoutId?: InputMaybe<Scalars["String"]["input"]>;
  closeTime: Scalars["DateTime"]["input"];
  code: Scalars["String"]["input"];
  entryTypes: Array<EntryType>;
  externalId?: InputMaybe<Scalars["String"]["input"]>;
  gate: Scalars["String"]["input"];
  location: Scalars["String"]["input"];
  loungeTier: LoungeTierReferenceInput;
  maximumCapacity: Scalars["Int"]["input"];
  minimumAgeEntry: Scalars["Int"]["input"];
  name: Scalars["String"]["input"];
  openTime: Scalars["DateTime"]["input"];
  reservedSeats: Scalars["Int"]["input"];
  status: LoungeStatus;
};

export type UpdateLoungeTierPayload = {
  name: Scalars["String"]["input"];
  status: LoungeTierStatus;
  tier: Scalars["Int"]["input"];
};

export type UpdateRuleEnginePayload = {
  name: Scalars["String"]["input"];
};

export type UpdateSettlementChargeRuleInput = {
  airlineCarrier?: InputMaybe<Scalars["String"]["input"]>;
  billedLocationCode?: InputMaybe<Scalars["Int"]["input"]>;
  billingAirlineId?: InputMaybe<Scalars["Int"]["input"]>;
  billingLocationCode?: InputMaybe<Scalars["Int"]["input"]>;
  contractNumber?: InputMaybe<Scalars["String"]["input"]>;
  departureAirport?: InputMaybe<AirportByCodeInput>;
  loungeCode?: InputMaybe<Scalars["String"]["input"]>;
  loungeTier?: InputMaybe<Scalars["Int"]["input"]>;
  settlementCharge: SettlementChargeInput;
  settlementMethod?: InputMaybe<Scalars["String"]["input"]>;
  taxCode?: InputMaybe<Scalars["String"]["input"]>;
  unitOfMeasure?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateUserPayload = {
  credentials?: InputMaybe<UserCredentialsInput>;
  email: Scalars["String"]["input"];
  lounges: Array<UserLoungeInput>;
  name: Scalars["String"]["input"];
  profile: UserProfileInput;
  singleSignOn?: InputMaybe<Array<UserSingleSignOnInput>>;
  status: UserStatus;
};

export type UpdateVipPassengerInput = {
  airport?: InputMaybe<AirportReference>;
  companyCode?: InputMaybe<Scalars["String"]["input"]>;
  date?: InputMaybe<Scalars["DateTime"]["input"]>;
  isPermanent: Scalars["Boolean"]["input"];
  loyaltyNumber?: InputMaybe<Scalars["String"]["input"]>;
  passengerName: Scalars["String"]["input"];
  recordLocator?: InputMaybe<Scalars["String"]["input"]>;
  type: Scalars["String"]["input"];
};

export type User = {
  __typename?: "User";
  company?: Maybe<Company>;
  createdAt: Scalars["String"]["output"];
  email: Scalars["String"]["output"];
  hasCredentials?: Maybe<Scalars["Boolean"]["output"]>;
  id: Scalars["ID"]["output"];
  isSuperadmin: Scalars["Boolean"]["output"];
  lounges: Array<Maybe<Lounge>>;
  name?: Maybe<Scalars["String"]["output"]>;
  profile?: Maybe<Profile>;
  singleSignOn: Array<UserSingleSignOn>;
  status: UserStatus;
};

export type UserCredentialsInput = {
  password: Scalars["String"]["input"];
};

export type UserFilterInput = {
  isSuperAdmin?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserLoungeInput = {
  id: Scalars["ID"]["input"];
};

export type UserProfileInput = {
  id: Scalars["ID"]["input"];
};

export type UserQueryResult = {
  __typename?: "UserQueryResult";
  pagination: Pagination;
  results: Array<User>;
  totalCount: Scalars["Int"]["output"];
};

export type UserSingleSignOn = {
  __typename?: "UserSingleSignOn";
  singleSignOnId: Scalars["String"]["output"];
  singleSignOnType: SsoType;
  userSingleSignOnId: Scalars["String"]["output"];
};

export type UserSingleSignOnInput = {
  singleSignOnId: Scalars["String"]["input"];
  singleSignOnType: SsoType;
  userSingleSignOnId: Scalars["String"]["input"];
};

export enum UserStatus {
  Active = "ACTIVE",
  Deleted = "DELETED",
  Inactive = "INACTIVE",
  Invited = "INVITED",
}

export type VipPassenger = {
  __typename?: "VipPassenger";
  airport?: Maybe<Airport>;
  company: Company;
  companyCode?: Maybe<Scalars["String"]["output"]>;
  date?: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["ID"]["output"];
  isPermanent: Scalars["Boolean"]["output"];
  loyaltyNumber?: Maybe<Scalars["String"]["output"]>;
  passengerName: Scalars["String"]["output"];
  recordLocator?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
};

export type VipPassengerFilterInput = {
  airport?: InputMaybe<AirportReference>;
  dateFrom?: InputMaybe<Scalars["DateTime"]["input"]>;
  dateTo?: InputMaybe<Scalars["DateTime"]["input"]>;
  isPermanent?: InputMaybe<Scalars["Boolean"]["input"]>;
  loyaltyNumber?: InputMaybe<Scalars["String"]["input"]>;
  recordLocator?: InputMaybe<Scalars["String"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type VipPassengerQueryResult = {
  __typename?: "VipPassengerQueryResult";
  pagination: Pagination;
  results: Array<VipPassenger>;
  totalCount: Scalars["Int"]["output"];
};

export enum VipPassengerSortField {
  Date = "DATE",
  LoyaltyNumber = "LOYALTY_NUMBER",
  RecordLocator = "RECORD_LOCATOR",
}

export type VipPassengerSortInput = {
  field: VipPassengerSortField;
  order: SortOrder;
};

export type AirportFragmentFragment = {
  __typename?: "Airport";
  code: string;
  name: string;
  id: string;
  city: string;
  country: string;
  geoPos: string;
  active: boolean;
};

export type CompanyGroupFragmentFragment = {
  __typename?: "CompanyGroup";
  id: string;
  name: string;
  lightBackgroundLogoUrl?: string | undefined;
  darkBackgroundLogoUrl?: string | undefined;
  logomarkUrl?: string | undefined;
  status: CompanyStatus;
  companies: Array<{
    __typename?: "Company";
    id: string;
    shortName: string;
    status: CompanyStatus;
  }>;
};

export type CompanyFragmentFragment = {
  __typename?: "Company";
  id: string;
  name: string;
  shortName: string;
  code: string;
  lightBackgroundLogoUrl?: string | undefined;
  darkBackgroundLogoUrl?: string | undefined;
  logomarkUrl?: string | undefined;
  status: CompanyStatus;
  reentryWindowMinutes?: number | undefined;
  reentryWindowType?: ReentryWindowType | undefined;
  egateReentryWindowMinutes?: number | undefined;
  reportsDedupingWindowMinutes?: number | undefined;
  partnerCompanyGroup?:
    | { __typename?: "CompanyGroup"; id: string; name: string }
    | undefined;
};

export type LoungeTierFragmentFragment = {
  __typename?: "LoungeTier";
  id: string;
  tier: number;
  name: string;
  status: LoungeTierStatus;
  lounges: Array<{ __typename?: "Lounge"; id: string; name: string }>;
  company: {
    __typename?: "Company";
    id: string;
    name: string;
    shortName: string;
  };
};

export type LoungeFragmentFragment = {
  __typename?: "Lounge";
  id: string;
  name: string;
  location: string;
  code: string;
  externalId?: string | undefined;
  checkoutId?: string | undefined;
  gate: string;
  amenities: string;
  maximumCapacity: number;
  minimumAgeEntry: number;
  reservedSeats: number;
  entryTypes: Array<EntryType>;
  openTime: any;
  closeTime: any;
  status: LoungeStatus;
  company: { __typename?: "Company"; id: string; name: string };
  airport: {
    __typename?: "Airport";
    id: string;
    name: string;
    code: string;
    city: string;
    country: string;
    geoPos: string;
  };
  loungeTier?:
    | { __typename?: "LoungeTier"; id: string; name: string }
    | undefined;
};

export type PermissionFragmentFragment = {
  __typename?: "Permission";
  id: string;
  name: string;
};

export type ProfileFragmentFragment = {
  __typename?: "Profile";
  id: string;
  name: string;
  permissions: Array<{ __typename?: "Permission"; id: string; name: string }>;
  company: { __typename?: "Company"; id: string; name: string };
};

export type RuleEngineFragmentFragment = {
  __typename?: "RuleEngine";
  id: string;
  name: string;
  type: string;
  company: { __typename?: "Company"; id: string };
};

export type UserFragmentFragment = {
  __typename?: "User";
  id: string;
  status: UserStatus;
  name?: string | undefined;
  email: string;
  createdAt: string;
  hasCredentials?: boolean | undefined;
  company?: { __typename?: "Company"; id: string; name: string } | undefined;
  profile?: { __typename?: "Profile"; id: string; name: string } | undefined;
  lounges: Array<
    | {
        __typename?: "Lounge";
        id: string;
        name: string;
        code: string;
        status: LoungeStatus;
      }
    | undefined
  >;
  singleSignOn: Array<{
    __typename?: "UserSingleSignOn";
    singleSignOnId: string;
    singleSignOnType: SsoType;
    userSingleSignOnId: string;
  }>;
};

export type VipPassengerFragmentFragment = {
  __typename?: "VipPassenger";
  id: string;
  passengerName: string;
  loyaltyNumber?: string | undefined;
  type: string;
  recordLocator?: string | undefined;
  date?: any | undefined;
  isPermanent: boolean;
  companyCode?: string | undefined;
  airport?: { __typename?: "Airport"; id: string; code: string } | undefined;
};

export type UploadImageMutationVariables = Exact<{
  image: AssetImageInput;
}>;

export type UploadImageMutation = {
  __typename?: "Mutation";
  uploadImage: { __typename?: "AssetImage"; name: string; urlPath: string };
};

export type LoginMutationVariables = Exact<{
  companyId?: InputMaybe<Scalars["String"]["input"]>;
  payload: LoginPayload;
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: {
    __typename?: "AuthorizationToken";
    token: any;
    user?:
      | {
          __typename?: "User";
          id: string;
          status: UserStatus;
          name?: string | undefined;
          email: string;
          createdAt: string;
          hasCredentials?: boolean | undefined;
          company?:
            | { __typename?: "Company"; id: string; name: string }
            | undefined;
          profile?:
            | { __typename?: "Profile"; id: string; name: string }
            | undefined;
          lounges: Array<
            | {
                __typename?: "Lounge";
                id: string;
                name: string;
                code: string;
                status: LoungeStatus;
              }
            | undefined
          >;
          singleSignOn: Array<{
            __typename?: "UserSingleSignOn";
            singleSignOnId: string;
            singleSignOnType: SsoType;
            userSingleSignOnId: string;
          }>;
        }
      | undefined;
  };
};

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never }>;

export type RefreshTokenMutation = {
  __typename?: "Mutation";
  refreshToken: {
    __typename?: "AuthorizationToken";
    token: any;
    user?:
      | {
          __typename?: "User";
          id: string;
          status: UserStatus;
          name?: string | undefined;
          email: string;
          createdAt: string;
          hasCredentials?: boolean | undefined;
          company?:
            | { __typename?: "Company"; id: string; name: string }
            | undefined;
          profile?:
            | { __typename?: "Profile"; id: string; name: string }
            | undefined;
          lounges: Array<
            | {
                __typename?: "Lounge";
                id: string;
                name: string;
                code: string;
                status: LoungeStatus;
              }
            | undefined
          >;
          singleSignOn: Array<{
            __typename?: "UserSingleSignOn";
            singleSignOnId: string;
            singleSignOnType: SsoType;
            userSingleSignOnId: string;
          }>;
        }
      | undefined;
  };
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = {
  __typename?: "Mutation";
  logout?: boolean | undefined;
};

export type RequestPasswordResetMutationVariables = Exact<{
  companyId?: InputMaybe<Scalars["String"]["input"]>;
  payload: RequestPasswordResetPayload;
}>;

export type RequestPasswordResetMutation = {
  __typename?: "Mutation";
  requestPasswordReset: boolean;
};

export type ResetPasswordMutationVariables = Exact<{
  companyId?: InputMaybe<Scalars["String"]["input"]>;
  payload: ResetPasswordPayload;
}>;

export type ResetPasswordMutation = {
  __typename?: "Mutation";
  resetPassword: boolean;
};

export type InviteUserMutationVariables = Exact<{
  companyId?: InputMaybe<Scalars["String"]["input"]>;
  payload: InviteUserPayload;
}>;

export type InviteUserMutation = {
  __typename?: "Mutation";
  inviteUser: boolean;
};

export type RegisterMutationVariables = Exact<{
  payload: RegisterUserPayload;
}>;

export type RegisterMutation = {
  __typename?: "Mutation";
  register: {
    __typename?: "User";
    id: string;
    status: UserStatus;
    name?: string | undefined;
    email: string;
    createdAt: string;
    hasCredentials?: boolean | undefined;
    company?: { __typename?: "Company"; id: string; name: string } | undefined;
    profile?: { __typename?: "Profile"; id: string; name: string } | undefined;
    lounges: Array<
      | {
          __typename?: "Lounge";
          id: string;
          name: string;
          code: string;
          status: LoungeStatus;
        }
      | undefined
    >;
    singleSignOn: Array<{
      __typename?: "UserSingleSignOn";
      singleSignOnId: string;
      singleSignOnType: SsoType;
      userSingleSignOnId: string;
    }>;
  };
};

export type CreateCompanyGroupMutationVariables = Exact<{
  input: CreateCompanyGroupPayload;
}>;

export type CreateCompanyGroupMutation = {
  __typename?: "Mutation";
  createCompanyGroup: {
    __typename?: "CompanyGroup";
    id: string;
    name: string;
    lightBackgroundLogoUrl?: string | undefined;
    darkBackgroundLogoUrl?: string | undefined;
    logomarkUrl?: string | undefined;
    status: CompanyStatus;
    companies: Array<{
      __typename?: "Company";
      id: string;
      shortName: string;
      status: CompanyStatus;
    }>;
  };
};

export type UpdateCompanyGroupMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  input: UpdateCompanyGroupPayload;
}>;

export type UpdateCompanyGroupMutation = {
  __typename?: "Mutation";
  updateCompanyGroup: {
    __typename?: "CompanyGroup";
    id: string;
    name: string;
    lightBackgroundLogoUrl?: string | undefined;
    darkBackgroundLogoUrl?: string | undefined;
    logomarkUrl?: string | undefined;
    status: CompanyStatus;
    companies: Array<{
      __typename?: "Company";
      id: string;
      shortName: string;
      status: CompanyStatus;
    }>;
  };
};

export type DeleteCompanyGroupMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type DeleteCompanyGroupMutation = {
  __typename?: "Mutation";
  deleteCompanyGroup: boolean;
};

export type CreateCompanyMutationVariables = Exact<{
  input: CreateCompanyPayload;
}>;

export type CreateCompanyMutation = {
  __typename?: "Mutation";
  createCompany: {
    __typename?: "Company";
    id: string;
    name: string;
    shortName: string;
    code: string;
    lightBackgroundLogoUrl?: string | undefined;
    darkBackgroundLogoUrl?: string | undefined;
    logomarkUrl?: string | undefined;
    status: CompanyStatus;
    reentryWindowMinutes?: number | undefined;
    reentryWindowType?: ReentryWindowType | undefined;
    egateReentryWindowMinutes?: number | undefined;
    reportsDedupingWindowMinutes?: number | undefined;
    partnerCompanyGroup?:
      | { __typename?: "CompanyGroup"; id: string; name: string }
      | undefined;
  };
};

export type UpdateCompanyMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  input: UpdateCompanyPayload;
}>;

export type UpdateCompanyMutation = {
  __typename?: "Mutation";
  updateCompany: {
    __typename?: "Company";
    id: string;
    name: string;
    shortName: string;
    code: string;
    lightBackgroundLogoUrl?: string | undefined;
    darkBackgroundLogoUrl?: string | undefined;
    logomarkUrl?: string | undefined;
    status: CompanyStatus;
    reentryWindowMinutes?: number | undefined;
    reentryWindowType?: ReentryWindowType | undefined;
    egateReentryWindowMinutes?: number | undefined;
    reportsDedupingWindowMinutes?: number | undefined;
    partnerCompanyGroup?:
      | { __typename?: "CompanyGroup"; id: string; name: string }
      | undefined;
  };
};

export type DeleteCompanyMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type DeleteCompanyMutation = {
  __typename?: "Mutation";
  deleteCompany: boolean;
};

export type ExportUsersMutationVariables = Exact<{ [key: string]: never }>;

export type ExportUsersMutation = {
  __typename?: "Mutation";
  exportUsers: { __typename?: "ExportResult"; urlPath: string };
};

export type ExportLoungesMutationVariables = Exact<{ [key: string]: never }>;

export type ExportLoungesMutation = {
  __typename?: "Mutation";
  exportLounges: { __typename?: "ExportResult"; urlPath: string };
};

export type CreateLoungeTierMutationVariables = Exact<{
  companyId: Scalars["String"]["input"];
  input: CreateLoungeTierPayload;
}>;

export type CreateLoungeTierMutation = {
  __typename?: "Mutation";
  createLoungeTier: {
    __typename?: "LoungeTier";
    id: string;
    tier: number;
    name: string;
    status: LoungeTierStatus;
    lounges: Array<{ __typename?: "Lounge"; id: string; name: string }>;
    company: {
      __typename?: "Company";
      id: string;
      name: string;
      shortName: string;
    };
  };
};

export type UpdateLoungeTierMutationVariables = Exact<{
  companyId: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
  input: UpdateLoungeTierPayload;
}>;

export type UpdateLoungeTierMutation = {
  __typename?: "Mutation";
  updateLoungeTier: {
    __typename?: "LoungeTier";
    id: string;
    tier: number;
    name: string;
    status: LoungeTierStatus;
    lounges: Array<{ __typename?: "Lounge"; id: string; name: string }>;
    company: {
      __typename?: "Company";
      id: string;
      name: string;
      shortName: string;
    };
  };
};

export type RemoveLoungeTierMutationVariables = Exact<{
  companyId: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
}>;

export type RemoveLoungeTierMutation = {
  __typename?: "Mutation";
  removeLoungeTier: boolean;
};

export type CreateLoungeMutationVariables = Exact<{
  companyId: Scalars["String"]["input"];
  input: CreateLoungePayload;
}>;

export type CreateLoungeMutation = {
  __typename?: "Mutation";
  createLounge: {
    __typename?: "Lounge";
    id: string;
    name: string;
    location: string;
    code: string;
    externalId?: string | undefined;
    checkoutId?: string | undefined;
    gate: string;
    amenities: string;
    maximumCapacity: number;
    minimumAgeEntry: number;
    reservedSeats: number;
    entryTypes: Array<EntryType>;
    openTime: any;
    closeTime: any;
    status: LoungeStatus;
    company: { __typename?: "Company"; id: string; name: string };
    airport: {
      __typename?: "Airport";
      id: string;
      name: string;
      code: string;
      city: string;
      country: string;
      geoPos: string;
    };
    loungeTier?:
      | { __typename?: "LoungeTier"; id: string; name: string }
      | undefined;
  };
};

export type RemoveLoungeMutationVariables = Exact<{
  companyId: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
}>;

export type RemoveLoungeMutation = {
  __typename?: "Mutation";
  removeLounge: boolean;
};

export type UpdateLoungeMutationVariables = Exact<{
  companyId: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
  input: UpdateLoungePayload;
}>;

export type UpdateLoungeMutation = {
  __typename?: "Mutation";
  updateLounge: {
    __typename?: "Lounge";
    id: string;
    name: string;
    location: string;
    code: string;
    externalId?: string | undefined;
    checkoutId?: string | undefined;
    gate: string;
    amenities: string;
    maximumCapacity: number;
    minimumAgeEntry: number;
    reservedSeats: number;
    entryTypes: Array<EntryType>;
    openTime: any;
    closeTime: any;
    status: LoungeStatus;
    company: { __typename?: "Company"; id: string; name: string };
    airport: {
      __typename?: "Airport";
      id: string;
      name: string;
      code: string;
      city: string;
      country: string;
      geoPos: string;
    };
    loungeTier?:
      | { __typename?: "LoungeTier"; id: string; name: string }
      | undefined;
  };
};

export type UploadBulkImportFileMutationVariables = Exact<{
  bulkImport: BulkImportFileInput;
}>;

export type UploadBulkImportFileMutation = {
  __typename?: "Mutation";
  uploadBulkImportFile: {
    __typename?: "AssetBulkFile";
    name: string;
    urlPath: string;
  };
};

export type ImportLoungesMutationVariables = Exact<{
  url: Scalars["String"]["input"];
}>;

export type ImportLoungesMutation = {
  __typename?: "Mutation";
  importLounges: {
    __typename?: "ImportResult";
    success: boolean;
    newItems: number;
    changedItems: number;
    unchangedItems: number;
    errorItems: number;
    errors: Array<{
      __typename?: "ImportValidationError";
      itemId: string;
      message: string;
    }>;
  };
};

export type CreateProfileMutationVariables = Exact<{
  companyId: Scalars["String"]["input"];
  input: ProfileInput;
}>;

export type CreateProfileMutation = {
  __typename?: "Mutation";
  createProfile: {
    __typename?: "Profile";
    id: string;
    name: string;
    permissions: Array<{ __typename?: "Permission"; id: string; name: string }>;
    company: { __typename?: "Company"; id: string; name: string };
  };
};

export type UpdateProfileMutationVariables = Exact<{
  companyId: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
  input: ProfileInput;
}>;

export type UpdateProfileMutation = {
  __typename?: "Mutation";
  updateProfile: {
    __typename?: "Profile";
    id: string;
    name: string;
    permissions: Array<{ __typename?: "Permission"; id: string; name: string }>;
    company: { __typename?: "Company"; id: string; name: string };
  };
};

export type RemoveProfileMutationVariables = Exact<{
  companyId: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
}>;

export type RemoveProfileMutation = {
  __typename?: "Mutation";
  removeProfile: boolean;
};

export type CreateRuleEngineMutationVariables = Exact<{
  companyId: Scalars["String"]["input"];
  payload: CreateRuleEnginePayload;
}>;

export type CreateRuleEngineMutation = {
  __typename?: "Mutation";
  createRuleEngine: {
    __typename?: "RuleEngine";
    id: string;
    name: string;
    type: string;
    company: { __typename?: "Company"; id: string };
  };
};

export type CreateRuleEngineModelMutationVariables = Exact<{
  companyId: Scalars["String"]["input"];
  payload: CreateRuleEngineModelPayload;
}>;

export type CreateRuleEngineModelMutation = {
  __typename?: "Mutation";
  createRuleEngineModel: {
    __typename?: "RuleEngineModelMeta";
    id: string;
    createdAt: any;
    isActive: boolean;
    urlPath?: string | undefined;
    ruleEngine: { __typename?: "RuleEngine"; id: string };
  };
};

export type GenerateSettlementReportMutationVariables = Exact<{
  companyId: Scalars["String"]["input"];
  year: Scalars["Int"]["input"];
  month: Scalars["Int"]["input"];
}>;

export type GenerateSettlementReportMutation = {
  __typename?: "Mutation";
  generateSettlementReport: { __typename?: "ExportResult"; urlPath: string };
};

export type CreateSettlementChargeRuleMutationVariables = Exact<{
  companyId: Scalars["String"]["input"];
  input: CreateSettlementChargeRuleInput;
}>;

export type CreateSettlementChargeRuleMutation = {
  __typename?: "Mutation";
  createSettlementChargeRule: {
    __typename?: "SettlementChargeRule";
    id: number;
    airlineCarrier?: string | undefined;
    loungeTier: number;
    billingAirlineId?: number | undefined;
    settlementMethod?: string | undefined;
    unitOfMeasure?: string | undefined;
    taxCode?: string | undefined;
    billedLocationCode?: number | undefined;
    billingLocationCode?: number | undefined;
    contractNumber?: string | undefined;
    loungeCode?: string | undefined;
    company: { __typename?: "Company"; id: string; name: string };
    settlementCharge?:
      | {
          __typename?: "SettlementCharge";
          amount: number;
          currencyCode: string;
        }
      | undefined;
    departureAirport?:
      | { __typename?: "AirportByCode"; code: string }
      | undefined;
  };
};

export type UpdateSettlementChargeRuleMutationVariables = Exact<{
  companyId: Scalars["String"]["input"];
  id: Scalars["Int"]["input"];
  input: UpdateSettlementChargeRuleInput;
}>;

export type UpdateSettlementChargeRuleMutation = {
  __typename?: "Mutation";
  updateSettlementChargeRule: {
    __typename?: "SettlementChargeRule";
    id: number;
    airlineCarrier?: string | undefined;
    loungeTier: number;
    billingAirlineId?: number | undefined;
    settlementMethod?: string | undefined;
    unitOfMeasure?: string | undefined;
    taxCode?: string | undefined;
    billedLocationCode?: number | undefined;
    billingLocationCode?: number | undefined;
    contractNumber?: string | undefined;
    loungeCode?: string | undefined;
    company: { __typename?: "Company"; id: string; name: string };
    settlementCharge?:
      | {
          __typename?: "SettlementCharge";
          amount: number;
          currencyCode: string;
        }
      | undefined;
    departureAirport?:
      | { __typename?: "AirportByCode"; code: string }
      | undefined;
  };
};

export type RemoveSettlementChargeRuleMutationVariables = Exact<{
  companyId: Scalars["String"]["input"];
  id: Scalars["Int"]["input"];
}>;

export type RemoveSettlementChargeRuleMutation = {
  __typename?: "Mutation";
  removeSettlementChargeRule: { __typename?: "RemoveResult"; id: number };
};

export type DeleteUserMutationVariables = Exact<{
  companyId: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
}>;

export type DeleteUserMutation = {
  __typename?: "Mutation";
  deleteUser: boolean;
};

export type CreateUserMutationVariables = Exact<{
  companyId: Scalars["String"]["input"];
  payload: CreateUserPayload;
}>;

export type CreateUserMutation = {
  __typename?: "Mutation";
  createUser?:
    | {
        __typename?: "User";
        id: string;
        status: UserStatus;
        name?: string | undefined;
        email: string;
        createdAt: string;
        hasCredentials?: boolean | undefined;
        company?:
          | { __typename?: "Company"; id: string; name: string }
          | undefined;
        profile?:
          | { __typename?: "Profile"; id: string; name: string }
          | undefined;
        lounges: Array<
          | {
              __typename?: "Lounge";
              id: string;
              name: string;
              code: string;
              status: LoungeStatus;
            }
          | undefined
        >;
        singleSignOn: Array<{
          __typename?: "UserSingleSignOn";
          singleSignOnId: string;
          singleSignOnType: SsoType;
          userSingleSignOnId: string;
        }>;
      }
    | undefined;
};

export type UpdateUserMutationVariables = Exact<{
  companyId: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
  payload: UpdateUserPayload;
}>;

export type UpdateUserMutation = {
  __typename?: "Mutation";
  updateUser?:
    | {
        __typename?: "User";
        id: string;
        status: UserStatus;
        name?: string | undefined;
        email: string;
        createdAt: string;
        hasCredentials?: boolean | undefined;
        company?:
          | { __typename?: "Company"; id: string; name: string }
          | undefined;
        profile?:
          | { __typename?: "Profile"; id: string; name: string }
          | undefined;
        lounges: Array<
          | {
              __typename?: "Lounge";
              id: string;
              name: string;
              code: string;
              status: LoungeStatus;
            }
          | undefined
        >;
        singleSignOn: Array<{
          __typename?: "UserSingleSignOn";
          singleSignOnId: string;
          singleSignOnType: SsoType;
          userSingleSignOnId: string;
        }>;
      }
    | undefined;
};

export type ImportUsersMutationVariables = Exact<{
  url: Scalars["String"]["input"];
}>;

export type ImportUsersMutation = {
  __typename?: "Mutation";
  importUsers: {
    __typename?: "ImportResult";
    success: boolean;
    newItems: number;
    changedItems: number;
    unchangedItems: number;
    errorItems: number;
    errors: Array<{
      __typename?: "ImportValidationError";
      itemId: string;
      message: string;
    }>;
  };
};

export type CreateVipPassengerMutationVariables = Exact<{
  companyId: Scalars["String"]["input"];
  input: CreateVipPassengerInput;
}>;

export type CreateVipPassengerMutation = {
  __typename?: "Mutation";
  createVipPassenger: { __typename?: "VipPassenger"; id: string };
};

export type RemoveVipPassengerMutationVariables = Exact<{
  companyId: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
}>;

export type RemoveVipPassengerMutation = {
  __typename?: "Mutation";
  removeVipPassenger: boolean;
};

export type UpdateVipPassengerMutationVariables = Exact<{
  companyId: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
  input: UpdateVipPassengerInput;
}>;

export type UpdateVipPassengerMutation = {
  __typename?: "Mutation";
  updateVipPassenger: { __typename?: "VipPassenger"; id: string };
};

export type GetAirportQueryVariables = Exact<{
  filter: AirportUniqueFilterInput;
}>;

export type GetAirportQuery = {
  __typename?: "Query";
  airport: {
    __typename?: "Airport";
    id: string;
    code: string;
    name: string;
    city: string;
    country: string;
  };
};

export type GetAirportsQueryVariables = Exact<{
  filter?: InputMaybe<AirportFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
}>;

export type GetAirportsQuery = {
  __typename?: "Query";
  airports: {
    __typename?: "AirportQueryResult";
    totalCount: number;
    results: Array<{
      __typename?: "Airport";
      code: string;
      name: string;
      id: string;
      city: string;
      country: string;
      geoPos: string;
      active: boolean;
    }>;
  };
};

export type GetCompanyGroupsQueryVariables = Exact<{
  filter?: InputMaybe<CompanyGroupFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
}>;

export type GetCompanyGroupsQuery = {
  __typename?: "Query";
  companyGroups: {
    __typename?: "CompanyGroupQueryResult";
    totalCount: number;
    results: Array<{
      __typename?: "CompanyGroup";
      id: string;
      name: string;
      lightBackgroundLogoUrl?: string | undefined;
      darkBackgroundLogoUrl?: string | undefined;
      logomarkUrl?: string | undefined;
      status: CompanyStatus;
      companies: Array<{
        __typename?: "Company";
        id: string;
        shortName: string;
        status: CompanyStatus;
      }>;
    }>;
    pagination: { __typename?: "Pagination"; offset: number; limit: number };
  };
};

export type GetCompanyGroupQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type GetCompanyGroupQuery = {
  __typename?: "Query";
  companyGroup: {
    __typename?: "CompanyGroup";
    id: string;
    name: string;
    lightBackgroundLogoUrl?: string | undefined;
    darkBackgroundLogoUrl?: string | undefined;
    logomarkUrl?: string | undefined;
    status: CompanyStatus;
    companies: Array<{
      __typename?: "Company";
      id: string;
      shortName: string;
      status: CompanyStatus;
    }>;
  };
};

export type GetCompanyGroupsAmountQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetCompanyGroupsAmountQuery = {
  __typename?: "Query";
  companyGroups: { __typename?: "CompanyGroupQueryResult"; totalCount: number };
};

export type GetCompaniesQueryVariables = Exact<{
  filter?: InputMaybe<CompanyFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
}>;

export type GetCompaniesQuery = {
  __typename?: "Query";
  companies: {
    __typename?: "CompanyQueryResult";
    totalCount: number;
    pagination: { __typename?: "Pagination"; limit: number; offset: number };
    results: Array<{
      __typename?: "Company";
      id: string;
      name: string;
      shortName: string;
      code: string;
      lightBackgroundLogoUrl?: string | undefined;
      darkBackgroundLogoUrl?: string | undefined;
      logomarkUrl?: string | undefined;
      status: CompanyStatus;
      reentryWindowMinutes?: number | undefined;
      reentryWindowType?: ReentryWindowType | undefined;
      egateReentryWindowMinutes?: number | undefined;
      reportsDedupingWindowMinutes?: number | undefined;
      lounges?:
        | Array<{ __typename?: "Lounge"; id: string; name: string }>
        | undefined;
      partnerCompanyGroup?:
        | { __typename?: "CompanyGroup"; id: string; name: string }
        | undefined;
    }>;
  };
};

export type GetCompanyListQueryVariables = Exact<{
  filter?: InputMaybe<CompanyFilterInput>;
}>;

export type GetCompanyListQuery = {
  __typename?: "Query";
  companies: {
    __typename?: "CompanyQueryResult";
    totalCount: number;
    pagination: { __typename?: "Pagination"; limit: number; offset: number };
    results: Array<{
      __typename?: "Company";
      id: string;
      name: string;
      shortName: string;
      code: string;
      lightBackgroundLogoUrl?: string | undefined;
      darkBackgroundLogoUrl?: string | undefined;
      logomarkUrl?: string | undefined;
      status: CompanyStatus;
      reentryWindowMinutes?: number | undefined;
      reentryWindowType?: ReentryWindowType | undefined;
      egateReentryWindowMinutes?: number | undefined;
      reportsDedupingWindowMinutes?: number | undefined;
      partnerCompanyGroup?:
        | { __typename?: "CompanyGroup"; id: string; name: string }
        | undefined;
    }>;
  };
};

export type GetCompanyQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type GetCompanyQuery = {
  __typename?: "Query";
  company: {
    __typename?: "Company";
    id: string;
    name: string;
    shortName: string;
    code: string;
    lightBackgroundLogoUrl?: string | undefined;
    darkBackgroundLogoUrl?: string | undefined;
    logomarkUrl?: string | undefined;
    status: CompanyStatus;
    reentryWindowMinutes?: number | undefined;
    reentryWindowType?: ReentryWindowType | undefined;
    egateReentryWindowMinutes?: number | undefined;
    reportsDedupingWindowMinutes?: number | undefined;
    partnerCompanyGroup?:
      | { __typename?: "CompanyGroup"; id: string; name: string }
      | undefined;
  };
};

export type GetCompaniesAmountQueryVariables = Exact<{ [key: string]: never }>;

export type GetCompaniesAmountQuery = {
  __typename?: "Query";
  companies: { __typename?: "CompanyQueryResult"; totalCount: number };
};

export type GetLoungeTiersQueryVariables = Exact<{
  companyId?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<LoungeTierFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
}>;

export type GetLoungeTiersQuery = {
  __typename?: "Query";
  loungeTiers: {
    __typename?: "LoungeTierQueryResult";
    totalCount: number;
    pagination: { __typename?: "Pagination"; limit: number; offset: number };
    results: Array<{
      __typename?: "LoungeTier";
      id: string;
      tier: number;
      name: string;
      status: LoungeTierStatus;
      lounges: Array<{ __typename?: "Lounge"; id: string; name: string }>;
      company: {
        __typename?: "Company";
        id: string;
        name: string;
        shortName: string;
      };
    }>;
  };
};

export type GetLoungeTiersAmountQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetLoungeTiersAmountQuery = {
  __typename?: "Query";
  loungeTiers: { __typename?: "LoungeTierQueryResult"; totalCount: number };
};

export type GetLoungesQueryVariables = Exact<{
  companyId?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<LoungeFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
}>;

export type GetLoungesQuery = {
  __typename?: "Query";
  lounges: {
    __typename?: "LoungeQueryResult";
    totalCount: number;
    pagination: { __typename?: "Pagination"; limit: number; offset: number };
    results: Array<{
      __typename?: "Lounge";
      id: string;
      name: string;
      location: string;
      code: string;
      externalId?: string | undefined;
      checkoutId?: string | undefined;
      gate: string;
      amenities: string;
      maximumCapacity: number;
      minimumAgeEntry: number;
      reservedSeats: number;
      entryTypes: Array<EntryType>;
      openTime: any;
      closeTime: any;
      status: LoungeStatus;
      company: { __typename?: "Company"; id: string; name: string };
      airport: {
        __typename?: "Airport";
        id: string;
        name: string;
        code: string;
        city: string;
        country: string;
        geoPos: string;
      };
      loungeTier?:
        | { __typename?: "LoungeTier"; id: string; name: string }
        | undefined;
    }>;
  };
};

export type GetLoungesAmountQueryVariables = Exact<{ [key: string]: never }>;

export type GetLoungesAmountQuery = {
  __typename?: "Query";
  lounges: { __typename?: "LoungeQueryResult"; totalCount: number };
};

export type GetPermissionsQueryVariables = Exact<{
  filter?: InputMaybe<PermissionFilterInput>;
}>;

export type GetPermissionsQuery = {
  __typename?: "Query";
  permissions: Array<{ __typename?: "Permission"; id: string; name: string }>;
};

export type GetProfilesQueryVariables = Exact<{
  companyId?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<ProfileFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
}>;

export type GetProfilesQuery = {
  __typename?: "Query";
  profiles: {
    __typename?: "ProfileQueryResult";
    totalCount: number;
    results: Array<{
      __typename?: "Profile";
      id: string;
      name: string;
      permissions: Array<{
        __typename?: "Permission";
        id: string;
        name: string;
      }>;
      company: { __typename?: "Company"; id: string; name: string };
    }>;
    pagination: { __typename?: "Pagination"; offset: number; limit: number };
  };
};

export type GetRuleEngineModelQueryVariables = Exact<{
  companyId: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
}>;

export type GetRuleEngineModelQuery = {
  __typename?: "Query";
  ruleEngineModel: { __typename?: "RuleEngineModel"; id: string; model: any };
};

export type GetRuleEngineModelsQueryVariables = Exact<{
  companyId?: InputMaybe<Scalars["ID"]["input"]>;
  filter?: InputMaybe<RuleEngineModelFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<RuleEngineSortInput>;
}>;

export type GetRuleEngineModelsQuery = {
  __typename?: "Query";
  ruleEngineModels: {
    __typename?: "RuleEngineModelQueryResult";
    totalCount: number;
    pagination: { __typename?: "Pagination"; offset: number; limit: number };
    results: Array<{
      __typename?: "RuleEngineModel";
      id: string;
      createdAt: any;
      isActive: boolean;
      urlPath?: string | undefined;
      createdBy?:
        | { __typename?: "User"; id: string; name?: string | undefined }
        | undefined;
      ruleEngine: {
        __typename?: "RuleEngine";
        id: string;
        name: string;
        type: string;
        activeModelId?: string | undefined;
        company: { __typename?: "Company"; id: string };
      };
    }>;
  };
};

export type GetRuleEnginesQueryVariables = Exact<{
  companyId?: InputMaybe<Scalars["ID"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<RuleEngineSortInput>;
  withModels?: InputMaybe<Scalars["Boolean"]["input"]>;
}>;

export type GetRuleEnginesQuery = {
  __typename?: "Query";
  ruleEngines: {
    __typename?: "RuleEngineQueryResult";
    totalCount: number;
    pagination: { __typename?: "Pagination"; offset: number; limit: number };
    results: Array<{
      __typename?: "RuleEngine";
      id: string;
      name: string;
      type: string;
      company: { __typename?: "Company"; id: string };
      models?:
        | Array<{
            __typename?: "RuleEngineModel";
            id: string;
            createdAt: any;
            isActive: boolean;
            model: any;
            urlPath?: string | undefined;
            createdBy?:
              | { __typename?: "User"; id: string; name?: string | undefined }
              | undefined;
          }>
        | undefined;
    }>;
  };
};

export type GetSettlementChargeRulesQueryVariables = Exact<{
  companyId?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<SettlementChargeRuleFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
}>;

export type GetSettlementChargeRulesQuery = {
  __typename?: "Query";
  settlementChargeRules: {
    __typename?: "SettlementChargeRuleQueryResult";
    totalCount: number;
    pagination?:
      | { __typename?: "Pagination"; offset: number; limit: number }
      | undefined;
    results: Array<{
      __typename?: "SettlementChargeRule";
      id: number;
      airlineCarrier?: string | undefined;
      loungeTier: number;
      billingAirlineId?: number | undefined;
      settlementMethod?: string | undefined;
      unitOfMeasure?: string | undefined;
      taxCode?: string | undefined;
      billedLocationCode?: number | undefined;
      billingLocationCode?: number | undefined;
      contractNumber?: string | undefined;
      loungeCode?: string | undefined;
      company: { __typename?: "Company"; id: string; name: string };
      settlementCharge?:
        | {
            __typename?: "SettlementCharge";
            amount: number;
            currencyCode: string;
          }
        | undefined;
      departureAirport?:
        | { __typename?: "AirportByCode"; code: string }
        | undefined;
    }>;
  };
};

export type GetSettlementChargeRuleQueryVariables = Exact<{
  companyId: Scalars["String"]["input"];
  id: Scalars["Int"]["input"];
}>;

export type GetSettlementChargeRuleQuery = {
  __typename?: "Query";
  settlementChargeRule?:
    | {
        __typename?: "SettlementChargeRule";
        id: number;
        airlineCarrier?: string | undefined;
        loungeTier: number;
        billingAirlineId?: number | undefined;
        settlementMethod?: string | undefined;
        unitOfMeasure?: string | undefined;
        taxCode?: string | undefined;
        billedLocationCode?: number | undefined;
        billingLocationCode?: number | undefined;
        contractNumber?: string | undefined;
        loungeCode?: string | undefined;
        company: { __typename?: "Company"; id: string; name: string };
        settlementCharge?:
          | {
              __typename?: "SettlementCharge";
              amount: number;
              currencyCode: string;
            }
          | undefined;
        departureAirport?:
          | { __typename?: "AirportByCode"; code: string }
          | undefined;
      }
    | undefined;
};

export type SettlementChargeRuleFragmentFragment = {
  __typename?: "SettlementChargeRule";
  id: number;
  airlineCarrier?: string | undefined;
  loungeTier: number;
  billingAirlineId?: number | undefined;
  settlementMethod?: string | undefined;
  unitOfMeasure?: string | undefined;
  taxCode?: string | undefined;
  billedLocationCode?: number | undefined;
  billingLocationCode?: number | undefined;
  contractNumber?: string | undefined;
  loungeCode?: string | undefined;
  company: { __typename?: "Company"; id: string; name: string };
  settlementCharge?:
    | { __typename?: "SettlementCharge"; amount: number; currencyCode: string }
    | undefined;
  departureAirport?: { __typename?: "AirportByCode"; code: string } | undefined;
};

export type GetAuthenticationOptionsQueryVariables = Exact<{
  companyId?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetAuthenticationOptionsQuery = {
  __typename?: "Query";
  authenticationOptions: Array<{
    __typename?: "AuthenticationOption";
    id: string;
    type: AuthenticationOptionType;
    code: string;
    name: string;
    display: boolean;
  }>;
};

export type GetUsersQueryVariables = Exact<{
  filter?: InputMaybe<UserFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
}>;

export type GetUsersQuery = {
  __typename?: "Query";
  users: {
    __typename?: "UserQueryResult";
    totalCount: number;
    results: Array<{
      __typename?: "User";
      id: string;
      status: UserStatus;
      name?: string | undefined;
      email: string;
      createdAt: string;
      hasCredentials?: boolean | undefined;
      lounges: Array<
        | {
            __typename?: "Lounge";
            id: string;
            code: string;
            status: LoungeStatus;
            name: string;
          }
        | undefined
      >;
      company?:
        | { __typename?: "Company"; id: string; name: string }
        | undefined;
      profile?:
        | { __typename?: "Profile"; id: string; name: string }
        | undefined;
      singleSignOn: Array<{
        __typename?: "UserSingleSignOn";
        singleSignOnId: string;
        singleSignOnType: SsoType;
        userSingleSignOnId: string;
      }>;
    }>;
    pagination: { __typename?: "Pagination"; offset: number; limit: number };
  };
};

export type GetUserQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type GetUserQuery = {
  __typename?: "Query";
  user?:
    | {
        __typename?: "User";
        id: string;
        status: UserStatus;
        name?: string | undefined;
        email: string;
        createdAt: string;
        hasCredentials?: boolean | undefined;
        company?:
          | { __typename?: "Company"; id: string; name: string }
          | undefined;
        profile?:
          | { __typename?: "Profile"; id: string; name: string }
          | undefined;
        lounges: Array<
          | {
              __typename?: "Lounge";
              id: string;
              name: string;
              code: string;
              status: LoungeStatus;
            }
          | undefined
        >;
        singleSignOn: Array<{
          __typename?: "UserSingleSignOn";
          singleSignOnId: string;
          singleSignOnType: SsoType;
          userSingleSignOnId: string;
        }>;
      }
    | undefined;
};

export type GetVipPassengerQueryVariables = Exact<{
  companyId: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
}>;

export type GetVipPassengerQuery = {
  __typename?: "Query";
  vipPassenger?:
    | {
        __typename?: "VipPassenger";
        id: string;
        passengerName: string;
        loyaltyNumber?: string | undefined;
        type: string;
        recordLocator?: string | undefined;
        date?: any | undefined;
        isPermanent: boolean;
        companyCode?: string | undefined;
        airport?:
          | { __typename?: "Airport"; id: string; code: string }
          | undefined;
      }
    | undefined;
};

export type GetVipPassengersQueryVariables = Exact<{
  companyId: Scalars["String"]["input"];
  filter?: InputMaybe<VipPassengerFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<VipPassengerSortInput>;
}>;

export type GetVipPassengersQuery = {
  __typename?: "Query";
  vipPassengers: {
    __typename?: "VipPassengerQueryResult";
    totalCount: number;
    pagination: { __typename?: "Pagination"; offset: number; limit: number };
    results: Array<{
      __typename?: "VipPassenger";
      id: string;
      passengerName: string;
      loyaltyNumber?: string | undefined;
      type: string;
      recordLocator?: string | undefined;
      date?: any | undefined;
      isPermanent: boolean;
      companyCode?: string | undefined;
      airport?:
        | { __typename?: "Airport"; id: string; code: string }
        | undefined;
    }>;
  };
};

export const AirportFragmentFragmentDoc = gql`
  fragment AirportFragment on Airport {
    code
    name
    id
    city
    country
    geoPos
    active
  }
`;
export const CompanyGroupFragmentFragmentDoc = gql`
  fragment CompanyGroupFragment on CompanyGroup {
    id
    name
    lightBackgroundLogoUrl
    darkBackgroundLogoUrl
    logomarkUrl
    status
    companies {
      id
      shortName
      status
    }
  }
`;
export const CompanyFragmentFragmentDoc = gql`
  fragment CompanyFragment on Company {
    id
    name
    shortName
    code
    lightBackgroundLogoUrl
    darkBackgroundLogoUrl
    logomarkUrl
    status
    partnerCompanyGroup {
      id
      name
    }
    reentryWindowMinutes
    reentryWindowType
    egateReentryWindowMinutes
    reportsDedupingWindowMinutes
  }
`;
export const LoungeTierFragmentFragmentDoc = gql`
  fragment LoungeTierFragment on LoungeTier {
    id
    tier
    name
    status
    lounges {
      id
      name
    }
    company {
      id
      name
      shortName
    }
  }
`;
export const LoungeFragmentFragmentDoc = gql`
  fragment LoungeFragment on Lounge {
    id
    name
    location
    code
    externalId
    checkoutId
    gate
    amenities
    maximumCapacity
    minimumAgeEntry
    reservedSeats
    entryTypes
    openTime
    closeTime
    status
    company {
      id
      name
    }
    airport {
      id
      name
      code
      city
      country
      geoPos
    }
    loungeTier {
      id
      name
    }
  }
`;
export const PermissionFragmentFragmentDoc = gql`
  fragment PermissionFragment on Permission {
    id
    name
  }
`;
export const ProfileFragmentFragmentDoc = gql`
  fragment ProfileFragment on Profile {
    id
    name
    permissions {
      id
      name
    }
    company {
      id
      name
    }
  }
`;
export const RuleEngineFragmentFragmentDoc = gql`
  fragment RuleEngineFragment on RuleEngine {
    id
    company {
      id
    }
    name
    type
  }
`;
export const UserFragmentFragmentDoc = gql`
  fragment UserFragment on User {
    id
    status
    name
    email
    createdAt
    company {
      id
      name
    }
    profile {
      id
      name
    }
    lounges {
      id
      name
      code
      status
    }
    singleSignOn {
      singleSignOnId
      singleSignOnType
      userSingleSignOnId
    }
    hasCredentials
  }
`;
export const VipPassengerFragmentFragmentDoc = gql`
  fragment VipPassengerFragment on VipPassenger {
    id
    passengerName
    loyaltyNumber
    type
    recordLocator
    date
    airport {
      id
      code
    }
    isPermanent
    companyCode
  }
`;
export const SettlementChargeRuleFragmentFragmentDoc = gql`
  fragment SettlementChargeRuleFragment on SettlementChargeRule {
    id
    company {
      id
      name
    }
    settlementCharge {
      amount
      currencyCode
    }
    airlineCarrier
    departureAirport {
      code
    }
    loungeTier
    billingAirlineId
    settlementMethod
    unitOfMeasure
    taxCode
    billedLocationCode
    billingLocationCode
    contractNumber
    loungeCode
  }
`;
export const UploadImageDocument = gql`
  mutation UploadImage($image: AssetImageInput!) {
    uploadImage(image: $image) {
      name
      urlPath
    }
  }
`;
export type UploadImageMutationFn = Apollo.MutationFunction<
  UploadImageMutation,
  UploadImageMutationVariables
>;

/**
 * __useUploadImageMutation__
 *
 * To run a mutation, you first call `useUploadImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadImageMutation, { data, loading, error }] = useUploadImageMutation({
 *   variables: {
 *      image: // value for 'image'
 *   },
 * });
 */
export function useUploadImageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UploadImageMutation,
    UploadImageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UploadImageMutation, UploadImageMutationVariables>(
    UploadImageDocument,
    options,
  );
}
export type UploadImageMutationHookResult = ReturnType<
  typeof useUploadImageMutation
>;
export type UploadImageMutationResult =
  Apollo.MutationResult<UploadImageMutation>;
export type UploadImageMutationOptions = Apollo.BaseMutationOptions<
  UploadImageMutation,
  UploadImageMutationVariables
>;
export const LoginDocument = gql`
  mutation login($companyId: String, $payload: LoginPayload!) {
    login(companyId: $companyId, payload: $payload) {
      token
      user {
        ...UserFragment
      }
    }
  }
  ${UserFragmentFragmentDoc}
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options,
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const RefreshTokenDocument = gql`
  mutation refreshToken {
    refreshToken {
      token
      user {
        ...UserFragment
      }
    }
  }
  ${UserFragmentFragmentDoc}
`;
export type RefreshTokenMutationFn = Apollo.MutationFunction<
  RefreshTokenMutation,
  RefreshTokenMutationVariables
>;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshTokenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RefreshTokenMutation,
    RefreshTokenMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RefreshTokenMutation,
    RefreshTokenMutationVariables
  >(RefreshTokenDocument, options);
}
export type RefreshTokenMutationHookResult = ReturnType<
  typeof useRefreshTokenMutation
>;
export type RefreshTokenMutationResult =
  Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<
  RefreshTokenMutation,
  RefreshTokenMutationVariables
>;
export const LogoutDocument = gql`
  mutation logout {
    logout
  }
`;
export type LogoutMutationFn = Apollo.MutationFunction<
  LogoutMutation,
  LogoutMutationVariables
>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LogoutMutation,
    LogoutMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument,
    options,
  );
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<
  LogoutMutation,
  LogoutMutationVariables
>;
export const RequestPasswordResetDocument = gql`
  mutation RequestPasswordReset(
    $companyId: String
    $payload: RequestPasswordResetPayload!
  ) {
    requestPasswordReset(companyId: $companyId, payload: $payload)
  }
`;
export type RequestPasswordResetMutationFn = Apollo.MutationFunction<
  RequestPasswordResetMutation,
  RequestPasswordResetMutationVariables
>;

/**
 * __useRequestPasswordResetMutation__
 *
 * To run a mutation, you first call `useRequestPasswordResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestPasswordResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestPasswordResetMutation, { data, loading, error }] = useRequestPasswordResetMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useRequestPasswordResetMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RequestPasswordResetMutation,
    RequestPasswordResetMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RequestPasswordResetMutation,
    RequestPasswordResetMutationVariables
  >(RequestPasswordResetDocument, options);
}
export type RequestPasswordResetMutationHookResult = ReturnType<
  typeof useRequestPasswordResetMutation
>;
export type RequestPasswordResetMutationResult =
  Apollo.MutationResult<RequestPasswordResetMutation>;
export type RequestPasswordResetMutationOptions = Apollo.BaseMutationOptions<
  RequestPasswordResetMutation,
  RequestPasswordResetMutationVariables
>;
export const ResetPasswordDocument = gql`
  mutation ResetPassword($companyId: String, $payload: ResetPasswordPayload!) {
    resetPassword(companyId: $companyId, payload: $payload)
  }
`;
export type ResetPasswordMutationFn = Apollo.MutationFunction<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useResetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >(ResetPasswordDocument, options);
}
export type ResetPasswordMutationHookResult = ReturnType<
  typeof useResetPasswordMutation
>;
export type ResetPasswordMutationResult =
  Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;
export const InviteUserDocument = gql`
  mutation InviteUser($companyId: String, $payload: InviteUserPayload!) {
    inviteUser(companyId: $companyId, payload: $payload)
  }
`;
export type InviteUserMutationFn = Apollo.MutationFunction<
  InviteUserMutation,
  InviteUserMutationVariables
>;

/**
 * __useInviteUserMutation__
 *
 * To run a mutation, you first call `useInviteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInviteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inviteUserMutation, { data, loading, error }] = useInviteUserMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useInviteUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InviteUserMutation,
    InviteUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<InviteUserMutation, InviteUserMutationVariables>(
    InviteUserDocument,
    options,
  );
}
export type InviteUserMutationHookResult = ReturnType<
  typeof useInviteUserMutation
>;
export type InviteUserMutationResult =
  Apollo.MutationResult<InviteUserMutation>;
export type InviteUserMutationOptions = Apollo.BaseMutationOptions<
  InviteUserMutation,
  InviteUserMutationVariables
>;
export const RegisterDocument = gql`
  mutation Register($payload: RegisterUserPayload!) {
    register(payload: $payload) {
      ...UserFragment
    }
  }
  ${UserFragmentFragmentDoc}
`;
export type RegisterMutationFn = Apollo.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterMutation,
    RegisterMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument,
    options,
  );
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>;
export const CreateCompanyGroupDocument = gql`
  mutation CreateCompanyGroup($input: CreateCompanyGroupPayload!) {
    createCompanyGroup(input: $input) {
      ...CompanyGroupFragment
    }
  }
  ${CompanyGroupFragmentFragmentDoc}
`;
export type CreateCompanyGroupMutationFn = Apollo.MutationFunction<
  CreateCompanyGroupMutation,
  CreateCompanyGroupMutationVariables
>;

/**
 * __useCreateCompanyGroupMutation__
 *
 * To run a mutation, you first call `useCreateCompanyGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCompanyGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCompanyGroupMutation, { data, loading, error }] = useCreateCompanyGroupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCompanyGroupMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCompanyGroupMutation,
    CreateCompanyGroupMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateCompanyGroupMutation,
    CreateCompanyGroupMutationVariables
  >(CreateCompanyGroupDocument, options);
}
export type CreateCompanyGroupMutationHookResult = ReturnType<
  typeof useCreateCompanyGroupMutation
>;
export type CreateCompanyGroupMutationResult =
  Apollo.MutationResult<CreateCompanyGroupMutation>;
export type CreateCompanyGroupMutationOptions = Apollo.BaseMutationOptions<
  CreateCompanyGroupMutation,
  CreateCompanyGroupMutationVariables
>;
export const UpdateCompanyGroupDocument = gql`
  mutation UpdateCompanyGroup($id: ID!, $input: UpdateCompanyGroupPayload!) {
    updateCompanyGroup(id: $id, input: $input) {
      ...CompanyGroupFragment
    }
  }
  ${CompanyGroupFragmentFragmentDoc}
`;
export type UpdateCompanyGroupMutationFn = Apollo.MutationFunction<
  UpdateCompanyGroupMutation,
  UpdateCompanyGroupMutationVariables
>;

/**
 * __useUpdateCompanyGroupMutation__
 *
 * To run a mutation, you first call `useUpdateCompanyGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCompanyGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCompanyGroupMutation, { data, loading, error }] = useUpdateCompanyGroupMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCompanyGroupMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCompanyGroupMutation,
    UpdateCompanyGroupMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateCompanyGroupMutation,
    UpdateCompanyGroupMutationVariables
  >(UpdateCompanyGroupDocument, options);
}
export type UpdateCompanyGroupMutationHookResult = ReturnType<
  typeof useUpdateCompanyGroupMutation
>;
export type UpdateCompanyGroupMutationResult =
  Apollo.MutationResult<UpdateCompanyGroupMutation>;
export type UpdateCompanyGroupMutationOptions = Apollo.BaseMutationOptions<
  UpdateCompanyGroupMutation,
  UpdateCompanyGroupMutationVariables
>;
export const DeleteCompanyGroupDocument = gql`
  mutation DeleteCompanyGroup($id: ID!) {
    deleteCompanyGroup(id: $id)
  }
`;
export type DeleteCompanyGroupMutationFn = Apollo.MutationFunction<
  DeleteCompanyGroupMutation,
  DeleteCompanyGroupMutationVariables
>;

/**
 * __useDeleteCompanyGroupMutation__
 *
 * To run a mutation, you first call `useDeleteCompanyGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCompanyGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCompanyGroupMutation, { data, loading, error }] = useDeleteCompanyGroupMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCompanyGroupMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCompanyGroupMutation,
    DeleteCompanyGroupMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteCompanyGroupMutation,
    DeleteCompanyGroupMutationVariables
  >(DeleteCompanyGroupDocument, options);
}
export type DeleteCompanyGroupMutationHookResult = ReturnType<
  typeof useDeleteCompanyGroupMutation
>;
export type DeleteCompanyGroupMutationResult =
  Apollo.MutationResult<DeleteCompanyGroupMutation>;
export type DeleteCompanyGroupMutationOptions = Apollo.BaseMutationOptions<
  DeleteCompanyGroupMutation,
  DeleteCompanyGroupMutationVariables
>;
export const CreateCompanyDocument = gql`
  mutation CreateCompany($input: CreateCompanyPayload!) {
    createCompany(input: $input) {
      ...CompanyFragment
    }
  }
  ${CompanyFragmentFragmentDoc}
`;
export type CreateCompanyMutationFn = Apollo.MutationFunction<
  CreateCompanyMutation,
  CreateCompanyMutationVariables
>;

/**
 * __useCreateCompanyMutation__
 *
 * To run a mutation, you first call `useCreateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCompanyMutation, { data, loading, error }] = useCreateCompanyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCompanyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCompanyMutation,
    CreateCompanyMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateCompanyMutation,
    CreateCompanyMutationVariables
  >(CreateCompanyDocument, options);
}
export type CreateCompanyMutationHookResult = ReturnType<
  typeof useCreateCompanyMutation
>;
export type CreateCompanyMutationResult =
  Apollo.MutationResult<CreateCompanyMutation>;
export type CreateCompanyMutationOptions = Apollo.BaseMutationOptions<
  CreateCompanyMutation,
  CreateCompanyMutationVariables
>;
export const UpdateCompanyDocument = gql`
  mutation UpdateCompany($id: ID!, $input: UpdateCompanyPayload!) {
    updateCompany(id: $id, input: $input) {
      ...CompanyFragment
    }
  }
  ${CompanyFragmentFragmentDoc}
`;
export type UpdateCompanyMutationFn = Apollo.MutationFunction<
  UpdateCompanyMutation,
  UpdateCompanyMutationVariables
>;

/**
 * __useUpdateCompanyMutation__
 *
 * To run a mutation, you first call `useUpdateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCompanyMutation, { data, loading, error }] = useUpdateCompanyMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCompanyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCompanyMutation,
    UpdateCompanyMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateCompanyMutation,
    UpdateCompanyMutationVariables
  >(UpdateCompanyDocument, options);
}
export type UpdateCompanyMutationHookResult = ReturnType<
  typeof useUpdateCompanyMutation
>;
export type UpdateCompanyMutationResult =
  Apollo.MutationResult<UpdateCompanyMutation>;
export type UpdateCompanyMutationOptions = Apollo.BaseMutationOptions<
  UpdateCompanyMutation,
  UpdateCompanyMutationVariables
>;
export const DeleteCompanyDocument = gql`
  mutation DeleteCompany($id: ID!) {
    deleteCompany(id: $id)
  }
`;
export type DeleteCompanyMutationFn = Apollo.MutationFunction<
  DeleteCompanyMutation,
  DeleteCompanyMutationVariables
>;

/**
 * __useDeleteCompanyMutation__
 *
 * To run a mutation, you first call `useDeleteCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCompanyMutation, { data, loading, error }] = useDeleteCompanyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCompanyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCompanyMutation,
    DeleteCompanyMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteCompanyMutation,
    DeleteCompanyMutationVariables
  >(DeleteCompanyDocument, options);
}
export type DeleteCompanyMutationHookResult = ReturnType<
  typeof useDeleteCompanyMutation
>;
export type DeleteCompanyMutationResult =
  Apollo.MutationResult<DeleteCompanyMutation>;
export type DeleteCompanyMutationOptions = Apollo.BaseMutationOptions<
  DeleteCompanyMutation,
  DeleteCompanyMutationVariables
>;
export const ExportUsersDocument = gql`
  mutation ExportUsers {
    exportUsers(pagination: { offset: 0, limit: 2 }) {
      urlPath
    }
  }
`;
export type ExportUsersMutationFn = Apollo.MutationFunction<
  ExportUsersMutation,
  ExportUsersMutationVariables
>;

/**
 * __useExportUsersMutation__
 *
 * To run a mutation, you first call `useExportUsersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExportUsersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [exportUsersMutation, { data, loading, error }] = useExportUsersMutation({
 *   variables: {
 *   },
 * });
 */
export function useExportUsersMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ExportUsersMutation,
    ExportUsersMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ExportUsersMutation, ExportUsersMutationVariables>(
    ExportUsersDocument,
    options,
  );
}
export type ExportUsersMutationHookResult = ReturnType<
  typeof useExportUsersMutation
>;
export type ExportUsersMutationResult =
  Apollo.MutationResult<ExportUsersMutation>;
export type ExportUsersMutationOptions = Apollo.BaseMutationOptions<
  ExportUsersMutation,
  ExportUsersMutationVariables
>;
export const ExportLoungesDocument = gql`
  mutation ExportLounges {
    exportLounges(pagination: { offset: 0, limit: 2 }) {
      urlPath
    }
  }
`;
export type ExportLoungesMutationFn = Apollo.MutationFunction<
  ExportLoungesMutation,
  ExportLoungesMutationVariables
>;

/**
 * __useExportLoungesMutation__
 *
 * To run a mutation, you first call `useExportLoungesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExportLoungesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [exportLoungesMutation, { data, loading, error }] = useExportLoungesMutation({
 *   variables: {
 *   },
 * });
 */
export function useExportLoungesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ExportLoungesMutation,
    ExportLoungesMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ExportLoungesMutation,
    ExportLoungesMutationVariables
  >(ExportLoungesDocument, options);
}
export type ExportLoungesMutationHookResult = ReturnType<
  typeof useExportLoungesMutation
>;
export type ExportLoungesMutationResult =
  Apollo.MutationResult<ExportLoungesMutation>;
export type ExportLoungesMutationOptions = Apollo.BaseMutationOptions<
  ExportLoungesMutation,
  ExportLoungesMutationVariables
>;
export const CreateLoungeTierDocument = gql`
  mutation CreateLoungeTier(
    $companyId: String!
    $input: CreateLoungeTierPayload!
  ) {
    createLoungeTier(companyId: $companyId, input: $input) {
      ...LoungeTierFragment
    }
  }
  ${LoungeTierFragmentFragmentDoc}
`;
export type CreateLoungeTierMutationFn = Apollo.MutationFunction<
  CreateLoungeTierMutation,
  CreateLoungeTierMutationVariables
>;

/**
 * __useCreateLoungeTierMutation__
 *
 * To run a mutation, you first call `useCreateLoungeTierMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLoungeTierMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLoungeTierMutation, { data, loading, error }] = useCreateLoungeTierMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateLoungeTierMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateLoungeTierMutation,
    CreateLoungeTierMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateLoungeTierMutation,
    CreateLoungeTierMutationVariables
  >(CreateLoungeTierDocument, options);
}
export type CreateLoungeTierMutationHookResult = ReturnType<
  typeof useCreateLoungeTierMutation
>;
export type CreateLoungeTierMutationResult =
  Apollo.MutationResult<CreateLoungeTierMutation>;
export type CreateLoungeTierMutationOptions = Apollo.BaseMutationOptions<
  CreateLoungeTierMutation,
  CreateLoungeTierMutationVariables
>;
export const UpdateLoungeTierDocument = gql`
  mutation UpdateLoungeTier(
    $companyId: String!
    $id: ID!
    $input: UpdateLoungeTierPayload!
  ) {
    updateLoungeTier(companyId: $companyId, id: $id, input: $input) {
      ...LoungeTierFragment
    }
  }
  ${LoungeTierFragmentFragmentDoc}
`;
export type UpdateLoungeTierMutationFn = Apollo.MutationFunction<
  UpdateLoungeTierMutation,
  UpdateLoungeTierMutationVariables
>;

/**
 * __useUpdateLoungeTierMutation__
 *
 * To run a mutation, you first call `useUpdateLoungeTierMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLoungeTierMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLoungeTierMutation, { data, loading, error }] = useUpdateLoungeTierMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateLoungeTierMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateLoungeTierMutation,
    UpdateLoungeTierMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateLoungeTierMutation,
    UpdateLoungeTierMutationVariables
  >(UpdateLoungeTierDocument, options);
}
export type UpdateLoungeTierMutationHookResult = ReturnType<
  typeof useUpdateLoungeTierMutation
>;
export type UpdateLoungeTierMutationResult =
  Apollo.MutationResult<UpdateLoungeTierMutation>;
export type UpdateLoungeTierMutationOptions = Apollo.BaseMutationOptions<
  UpdateLoungeTierMutation,
  UpdateLoungeTierMutationVariables
>;
export const RemoveLoungeTierDocument = gql`
  mutation RemoveLoungeTier($companyId: String!, $id: ID!) {
    removeLoungeTier(companyId: $companyId, id: $id)
  }
`;
export type RemoveLoungeTierMutationFn = Apollo.MutationFunction<
  RemoveLoungeTierMutation,
  RemoveLoungeTierMutationVariables
>;

/**
 * __useRemoveLoungeTierMutation__
 *
 * To run a mutation, you first call `useRemoveLoungeTierMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveLoungeTierMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeLoungeTierMutation, { data, loading, error }] = useRemoveLoungeTierMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveLoungeTierMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveLoungeTierMutation,
    RemoveLoungeTierMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RemoveLoungeTierMutation,
    RemoveLoungeTierMutationVariables
  >(RemoveLoungeTierDocument, options);
}
export type RemoveLoungeTierMutationHookResult = ReturnType<
  typeof useRemoveLoungeTierMutation
>;
export type RemoveLoungeTierMutationResult =
  Apollo.MutationResult<RemoveLoungeTierMutation>;
export type RemoveLoungeTierMutationOptions = Apollo.BaseMutationOptions<
  RemoveLoungeTierMutation,
  RemoveLoungeTierMutationVariables
>;
export const CreateLoungeDocument = gql`
  mutation CreateLounge($companyId: String!, $input: CreateLoungePayload!) {
    createLounge(companyId: $companyId, input: $input) {
      ...LoungeFragment
    }
  }
  ${LoungeFragmentFragmentDoc}
`;
export type CreateLoungeMutationFn = Apollo.MutationFunction<
  CreateLoungeMutation,
  CreateLoungeMutationVariables
>;

/**
 * __useCreateLoungeMutation__
 *
 * To run a mutation, you first call `useCreateLoungeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLoungeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLoungeMutation, { data, loading, error }] = useCreateLoungeMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateLoungeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateLoungeMutation,
    CreateLoungeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateLoungeMutation,
    CreateLoungeMutationVariables
  >(CreateLoungeDocument, options);
}
export type CreateLoungeMutationHookResult = ReturnType<
  typeof useCreateLoungeMutation
>;
export type CreateLoungeMutationResult =
  Apollo.MutationResult<CreateLoungeMutation>;
export type CreateLoungeMutationOptions = Apollo.BaseMutationOptions<
  CreateLoungeMutation,
  CreateLoungeMutationVariables
>;
export const RemoveLoungeDocument = gql`
  mutation RemoveLounge($companyId: String!, $id: ID!) {
    removeLounge(companyId: $companyId, id: $id)
  }
`;
export type RemoveLoungeMutationFn = Apollo.MutationFunction<
  RemoveLoungeMutation,
  RemoveLoungeMutationVariables
>;

/**
 * __useRemoveLoungeMutation__
 *
 * To run a mutation, you first call `useRemoveLoungeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveLoungeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeLoungeMutation, { data, loading, error }] = useRemoveLoungeMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveLoungeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveLoungeMutation,
    RemoveLoungeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RemoveLoungeMutation,
    RemoveLoungeMutationVariables
  >(RemoveLoungeDocument, options);
}
export type RemoveLoungeMutationHookResult = ReturnType<
  typeof useRemoveLoungeMutation
>;
export type RemoveLoungeMutationResult =
  Apollo.MutationResult<RemoveLoungeMutation>;
export type RemoveLoungeMutationOptions = Apollo.BaseMutationOptions<
  RemoveLoungeMutation,
  RemoveLoungeMutationVariables
>;
export const UpdateLoungeDocument = gql`
  mutation updateLounge(
    $companyId: String!
    $id: ID!
    $input: UpdateLoungePayload!
  ) {
    updateLounge(companyId: $companyId, id: $id, input: $input) {
      ...LoungeFragment
    }
  }
  ${LoungeFragmentFragmentDoc}
`;
export type UpdateLoungeMutationFn = Apollo.MutationFunction<
  UpdateLoungeMutation,
  UpdateLoungeMutationVariables
>;

/**
 * __useUpdateLoungeMutation__
 *
 * To run a mutation, you first call `useUpdateLoungeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLoungeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLoungeMutation, { data, loading, error }] = useUpdateLoungeMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateLoungeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateLoungeMutation,
    UpdateLoungeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateLoungeMutation,
    UpdateLoungeMutationVariables
  >(UpdateLoungeDocument, options);
}
export type UpdateLoungeMutationHookResult = ReturnType<
  typeof useUpdateLoungeMutation
>;
export type UpdateLoungeMutationResult =
  Apollo.MutationResult<UpdateLoungeMutation>;
export type UpdateLoungeMutationOptions = Apollo.BaseMutationOptions<
  UpdateLoungeMutation,
  UpdateLoungeMutationVariables
>;
export const UploadBulkImportFileDocument = gql`
  mutation UploadBulkImportFile($bulkImport: BulkImportFileInput!) {
    uploadBulkImportFile(bulkImport: $bulkImport) {
      name
      urlPath
    }
  }
`;
export type UploadBulkImportFileMutationFn = Apollo.MutationFunction<
  UploadBulkImportFileMutation,
  UploadBulkImportFileMutationVariables
>;

/**
 * __useUploadBulkImportFileMutation__
 *
 * To run a mutation, you first call `useUploadBulkImportFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadBulkImportFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadBulkImportFileMutation, { data, loading, error }] = useUploadBulkImportFileMutation({
 *   variables: {
 *      bulkImport: // value for 'bulkImport'
 *   },
 * });
 */
export function useUploadBulkImportFileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UploadBulkImportFileMutation,
    UploadBulkImportFileMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UploadBulkImportFileMutation,
    UploadBulkImportFileMutationVariables
  >(UploadBulkImportFileDocument, options);
}
export type UploadBulkImportFileMutationHookResult = ReturnType<
  typeof useUploadBulkImportFileMutation
>;
export type UploadBulkImportFileMutationResult =
  Apollo.MutationResult<UploadBulkImportFileMutation>;
export type UploadBulkImportFileMutationOptions = Apollo.BaseMutationOptions<
  UploadBulkImportFileMutation,
  UploadBulkImportFileMutationVariables
>;
export const ImportLoungesDocument = gql`
  mutation ImportLounges($url: String!) {
    importLounges(payload: { urlPath: $url }) {
      success
      newItems
      changedItems
      unchangedItems
      errorItems
      errors {
        itemId
        message
      }
    }
  }
`;
export type ImportLoungesMutationFn = Apollo.MutationFunction<
  ImportLoungesMutation,
  ImportLoungesMutationVariables
>;

/**
 * __useImportLoungesMutation__
 *
 * To run a mutation, you first call `useImportLoungesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImportLoungesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [importLoungesMutation, { data, loading, error }] = useImportLoungesMutation({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useImportLoungesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ImportLoungesMutation,
    ImportLoungesMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ImportLoungesMutation,
    ImportLoungesMutationVariables
  >(ImportLoungesDocument, options);
}
export type ImportLoungesMutationHookResult = ReturnType<
  typeof useImportLoungesMutation
>;
export type ImportLoungesMutationResult =
  Apollo.MutationResult<ImportLoungesMutation>;
export type ImportLoungesMutationOptions = Apollo.BaseMutationOptions<
  ImportLoungesMutation,
  ImportLoungesMutationVariables
>;
export const CreateProfileDocument = gql`
  mutation CreateProfile($companyId: String!, $input: ProfileInput!) {
    createProfile(companyId: $companyId, input: $input) {
      ...ProfileFragment
    }
  }
  ${ProfileFragmentFragmentDoc}
`;
export type CreateProfileMutationFn = Apollo.MutationFunction<
  CreateProfileMutation,
  CreateProfileMutationVariables
>;

/**
 * __useCreateProfileMutation__
 *
 * To run a mutation, you first call `useCreateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProfileMutation, { data, loading, error }] = useCreateProfileMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProfileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProfileMutation,
    CreateProfileMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateProfileMutation,
    CreateProfileMutationVariables
  >(CreateProfileDocument, options);
}
export type CreateProfileMutationHookResult = ReturnType<
  typeof useCreateProfileMutation
>;
export type CreateProfileMutationResult =
  Apollo.MutationResult<CreateProfileMutation>;
export type CreateProfileMutationOptions = Apollo.BaseMutationOptions<
  CreateProfileMutation,
  CreateProfileMutationVariables
>;
export const UpdateProfileDocument = gql`
  mutation UpdateProfile($companyId: String!, $id: ID!, $input: ProfileInput!) {
    updateProfile(companyId: $companyId, id: $id, input: $input) {
      ...ProfileFragment
    }
  }
  ${ProfileFragmentFragmentDoc}
`;
export type UpdateProfileMutationFn = Apollo.MutationFunction<
  UpdateProfileMutation,
  UpdateProfileMutationVariables
>;

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProfileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateProfileMutation,
    UpdateProfileMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateProfileMutation,
    UpdateProfileMutationVariables
  >(UpdateProfileDocument, options);
}
export type UpdateProfileMutationHookResult = ReturnType<
  typeof useUpdateProfileMutation
>;
export type UpdateProfileMutationResult =
  Apollo.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<
  UpdateProfileMutation,
  UpdateProfileMutationVariables
>;
export const RemoveProfileDocument = gql`
  mutation RemoveProfile($companyId: String!, $id: ID!) {
    removeProfile(companyId: $companyId, id: $id)
  }
`;
export type RemoveProfileMutationFn = Apollo.MutationFunction<
  RemoveProfileMutation,
  RemoveProfileMutationVariables
>;

/**
 * __useRemoveProfileMutation__
 *
 * To run a mutation, you first call `useRemoveProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeProfileMutation, { data, loading, error }] = useRemoveProfileMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveProfileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveProfileMutation,
    RemoveProfileMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RemoveProfileMutation,
    RemoveProfileMutationVariables
  >(RemoveProfileDocument, options);
}
export type RemoveProfileMutationHookResult = ReturnType<
  typeof useRemoveProfileMutation
>;
export type RemoveProfileMutationResult =
  Apollo.MutationResult<RemoveProfileMutation>;
export type RemoveProfileMutationOptions = Apollo.BaseMutationOptions<
  RemoveProfileMutation,
  RemoveProfileMutationVariables
>;
export const CreateRuleEngineDocument = gql`
  mutation CreateRuleEngine(
    $companyId: String!
    $payload: CreateRuleEnginePayload!
  ) {
    createRuleEngine(companyId: $companyId, payload: $payload) {
      ...RuleEngineFragment
    }
  }
  ${RuleEngineFragmentFragmentDoc}
`;
export type CreateRuleEngineMutationFn = Apollo.MutationFunction<
  CreateRuleEngineMutation,
  CreateRuleEngineMutationVariables
>;

/**
 * __useCreateRuleEngineMutation__
 *
 * To run a mutation, you first call `useCreateRuleEngineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRuleEngineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRuleEngineMutation, { data, loading, error }] = useCreateRuleEngineMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useCreateRuleEngineMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateRuleEngineMutation,
    CreateRuleEngineMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateRuleEngineMutation,
    CreateRuleEngineMutationVariables
  >(CreateRuleEngineDocument, options);
}
export type CreateRuleEngineMutationHookResult = ReturnType<
  typeof useCreateRuleEngineMutation
>;
export type CreateRuleEngineMutationResult =
  Apollo.MutationResult<CreateRuleEngineMutation>;
export type CreateRuleEngineMutationOptions = Apollo.BaseMutationOptions<
  CreateRuleEngineMutation,
  CreateRuleEngineMutationVariables
>;
export const CreateRuleEngineModelDocument = gql`
  mutation CreateRuleEngineModel(
    $companyId: String!
    $payload: CreateRuleEngineModelPayload!
  ) {
    createRuleEngineModel(companyId: $companyId, payload: $payload) {
      id
      ruleEngine {
        id
      }
      createdAt
      isActive
      urlPath
    }
  }
`;
export type CreateRuleEngineModelMutationFn = Apollo.MutationFunction<
  CreateRuleEngineModelMutation,
  CreateRuleEngineModelMutationVariables
>;

/**
 * __useCreateRuleEngineModelMutation__
 *
 * To run a mutation, you first call `useCreateRuleEngineModelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRuleEngineModelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRuleEngineModelMutation, { data, loading, error }] = useCreateRuleEngineModelMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useCreateRuleEngineModelMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateRuleEngineModelMutation,
    CreateRuleEngineModelMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateRuleEngineModelMutation,
    CreateRuleEngineModelMutationVariables
  >(CreateRuleEngineModelDocument, options);
}
export type CreateRuleEngineModelMutationHookResult = ReturnType<
  typeof useCreateRuleEngineModelMutation
>;
export type CreateRuleEngineModelMutationResult =
  Apollo.MutationResult<CreateRuleEngineModelMutation>;
export type CreateRuleEngineModelMutationOptions = Apollo.BaseMutationOptions<
  CreateRuleEngineModelMutation,
  CreateRuleEngineModelMutationVariables
>;
export const GenerateSettlementReportDocument = gql`
  mutation GenerateSettlementReport(
    $companyId: String!
    $year: Int!
    $month: Int!
  ) {
    generateSettlementReport(
      companyId: $companyId
      year: $year
      month: $month
    ) {
      urlPath
    }
  }
`;
export type GenerateSettlementReportMutationFn = Apollo.MutationFunction<
  GenerateSettlementReportMutation,
  GenerateSettlementReportMutationVariables
>;

/**
 * __useGenerateSettlementReportMutation__
 *
 * To run a mutation, you first call `useGenerateSettlementReportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateSettlementReportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateSettlementReportMutation, { data, loading, error }] = useGenerateSettlementReportMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      year: // value for 'year'
 *      month: // value for 'month'
 *   },
 * });
 */
export function useGenerateSettlementReportMutation(
  baseOptions?: Apollo.MutationHookOptions<
    GenerateSettlementReportMutation,
    GenerateSettlementReportMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    GenerateSettlementReportMutation,
    GenerateSettlementReportMutationVariables
  >(GenerateSettlementReportDocument, options);
}
export type GenerateSettlementReportMutationHookResult = ReturnType<
  typeof useGenerateSettlementReportMutation
>;
export type GenerateSettlementReportMutationResult =
  Apollo.MutationResult<GenerateSettlementReportMutation>;
export type GenerateSettlementReportMutationOptions =
  Apollo.BaseMutationOptions<
    GenerateSettlementReportMutation,
    GenerateSettlementReportMutationVariables
  >;
export const CreateSettlementChargeRuleDocument = gql`
  mutation CreateSettlementChargeRule(
    $companyId: String!
    $input: CreateSettlementChargeRuleInput!
  ) {
    createSettlementChargeRule(companyId: $companyId, input: $input) {
      ...SettlementChargeRuleFragment
    }
  }
  ${SettlementChargeRuleFragmentFragmentDoc}
`;
export type CreateSettlementChargeRuleMutationFn = Apollo.MutationFunction<
  CreateSettlementChargeRuleMutation,
  CreateSettlementChargeRuleMutationVariables
>;

/**
 * __useCreateSettlementChargeRuleMutation__
 *
 * To run a mutation, you first call `useCreateSettlementChargeRuleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSettlementChargeRuleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSettlementChargeRuleMutation, { data, loading, error }] = useCreateSettlementChargeRuleMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSettlementChargeRuleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSettlementChargeRuleMutation,
    CreateSettlementChargeRuleMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateSettlementChargeRuleMutation,
    CreateSettlementChargeRuleMutationVariables
  >(CreateSettlementChargeRuleDocument, options);
}
export type CreateSettlementChargeRuleMutationHookResult = ReturnType<
  typeof useCreateSettlementChargeRuleMutation
>;
export type CreateSettlementChargeRuleMutationResult =
  Apollo.MutationResult<CreateSettlementChargeRuleMutation>;
export type CreateSettlementChargeRuleMutationOptions =
  Apollo.BaseMutationOptions<
    CreateSettlementChargeRuleMutation,
    CreateSettlementChargeRuleMutationVariables
  >;
export const UpdateSettlementChargeRuleDocument = gql`
  mutation UpdateSettlementChargeRule(
    $companyId: String!
    $id: Int!
    $input: UpdateSettlementChargeRuleInput!
  ) {
    updateSettlementChargeRule(companyId: $companyId, id: $id, input: $input) {
      ...SettlementChargeRuleFragment
    }
  }
  ${SettlementChargeRuleFragmentFragmentDoc}
`;
export type UpdateSettlementChargeRuleMutationFn = Apollo.MutationFunction<
  UpdateSettlementChargeRuleMutation,
  UpdateSettlementChargeRuleMutationVariables
>;

/**
 * __useUpdateSettlementChargeRuleMutation__
 *
 * To run a mutation, you first call `useUpdateSettlementChargeRuleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSettlementChargeRuleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSettlementChargeRuleMutation, { data, loading, error }] = useUpdateSettlementChargeRuleMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSettlementChargeRuleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateSettlementChargeRuleMutation,
    UpdateSettlementChargeRuleMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateSettlementChargeRuleMutation,
    UpdateSettlementChargeRuleMutationVariables
  >(UpdateSettlementChargeRuleDocument, options);
}
export type UpdateSettlementChargeRuleMutationHookResult = ReturnType<
  typeof useUpdateSettlementChargeRuleMutation
>;
export type UpdateSettlementChargeRuleMutationResult =
  Apollo.MutationResult<UpdateSettlementChargeRuleMutation>;
export type UpdateSettlementChargeRuleMutationOptions =
  Apollo.BaseMutationOptions<
    UpdateSettlementChargeRuleMutation,
    UpdateSettlementChargeRuleMutationVariables
  >;
export const RemoveSettlementChargeRuleDocument = gql`
  mutation RemoveSettlementChargeRule($companyId: String!, $id: Int!) {
    removeSettlementChargeRule(companyId: $companyId, id: $id) {
      id
    }
  }
`;
export type RemoveSettlementChargeRuleMutationFn = Apollo.MutationFunction<
  RemoveSettlementChargeRuleMutation,
  RemoveSettlementChargeRuleMutationVariables
>;

/**
 * __useRemoveSettlementChargeRuleMutation__
 *
 * To run a mutation, you first call `useRemoveSettlementChargeRuleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveSettlementChargeRuleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeSettlementChargeRuleMutation, { data, loading, error }] = useRemoveSettlementChargeRuleMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveSettlementChargeRuleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveSettlementChargeRuleMutation,
    RemoveSettlementChargeRuleMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RemoveSettlementChargeRuleMutation,
    RemoveSettlementChargeRuleMutationVariables
  >(RemoveSettlementChargeRuleDocument, options);
}
export type RemoveSettlementChargeRuleMutationHookResult = ReturnType<
  typeof useRemoveSettlementChargeRuleMutation
>;
export type RemoveSettlementChargeRuleMutationResult =
  Apollo.MutationResult<RemoveSettlementChargeRuleMutation>;
export type RemoveSettlementChargeRuleMutationOptions =
  Apollo.BaseMutationOptions<
    RemoveSettlementChargeRuleMutation,
    RemoveSettlementChargeRuleMutationVariables
  >;
export const DeleteUserDocument = gql`
  mutation DeleteUser($companyId: String!, $id: ID!) {
    deleteUser(companyId: $companyId, id: $id)
  }
`;
export type DeleteUserMutationFn = Apollo.MutationFunction<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(
    DeleteUserDocument,
    options,
  );
}
export type DeleteUserMutationHookResult = ReturnType<
  typeof useDeleteUserMutation
>;
export type DeleteUserMutationResult =
  Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;
export const CreateUserDocument = gql`
  mutation CreateUser($companyId: String!, $payload: CreateUserPayload!) {
    createUser(companyId: $companyId, payload: $payload) {
      ...UserFragment
    }
  }
  ${UserFragmentFragmentDoc}
`;
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options,
  );
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>;
export type CreateUserMutationResult =
  Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export const UpdateUserDocument = gql`
  mutation UpdateUser(
    $companyId: String!
    $id: ID!
    $payload: UpdateUserPayload!
  ) {
    updateUser(companyId: $companyId, id: $id, payload: $payload) {
      ...UserFragment
    }
  }
  ${UserFragmentFragmentDoc}
`;
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      id: // value for 'id'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options,
  );
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>;
export type UpdateUserMutationResult =
  Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export const ImportUsersDocument = gql`
  mutation ImportUsers($url: String!) {
    importUsers(payload: { urlPath: $url }) {
      success
      newItems
      changedItems
      unchangedItems
      errorItems
      errors {
        itemId
        message
      }
    }
  }
`;
export type ImportUsersMutationFn = Apollo.MutationFunction<
  ImportUsersMutation,
  ImportUsersMutationVariables
>;

/**
 * __useImportUsersMutation__
 *
 * To run a mutation, you first call `useImportUsersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImportUsersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [importUsersMutation, { data, loading, error }] = useImportUsersMutation({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useImportUsersMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ImportUsersMutation,
    ImportUsersMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ImportUsersMutation, ImportUsersMutationVariables>(
    ImportUsersDocument,
    options,
  );
}
export type ImportUsersMutationHookResult = ReturnType<
  typeof useImportUsersMutation
>;
export type ImportUsersMutationResult =
  Apollo.MutationResult<ImportUsersMutation>;
export type ImportUsersMutationOptions = Apollo.BaseMutationOptions<
  ImportUsersMutation,
  ImportUsersMutationVariables
>;
export const CreateVipPassengerDocument = gql`
  mutation CreateVipPassenger(
    $companyId: String!
    $input: CreateVipPassengerInput!
  ) {
    createVipPassenger(companyId: $companyId, input: $input) {
      id
    }
  }
`;
export type CreateVipPassengerMutationFn = Apollo.MutationFunction<
  CreateVipPassengerMutation,
  CreateVipPassengerMutationVariables
>;

/**
 * __useCreateVipPassengerMutation__
 *
 * To run a mutation, you first call `useCreateVipPassengerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVipPassengerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVipPassengerMutation, { data, loading, error }] = useCreateVipPassengerMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateVipPassengerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateVipPassengerMutation,
    CreateVipPassengerMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateVipPassengerMutation,
    CreateVipPassengerMutationVariables
  >(CreateVipPassengerDocument, options);
}
export type CreateVipPassengerMutationHookResult = ReturnType<
  typeof useCreateVipPassengerMutation
>;
export type CreateVipPassengerMutationResult =
  Apollo.MutationResult<CreateVipPassengerMutation>;
export type CreateVipPassengerMutationOptions = Apollo.BaseMutationOptions<
  CreateVipPassengerMutation,
  CreateVipPassengerMutationVariables
>;
export const RemoveVipPassengerDocument = gql`
  mutation RemoveVipPassenger($companyId: String!, $id: ID!) {
    removeVipPassenger(companyId: $companyId, id: $id)
  }
`;
export type RemoveVipPassengerMutationFn = Apollo.MutationFunction<
  RemoveVipPassengerMutation,
  RemoveVipPassengerMutationVariables
>;

/**
 * __useRemoveVipPassengerMutation__
 *
 * To run a mutation, you first call `useRemoveVipPassengerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveVipPassengerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeVipPassengerMutation, { data, loading, error }] = useRemoveVipPassengerMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveVipPassengerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveVipPassengerMutation,
    RemoveVipPassengerMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RemoveVipPassengerMutation,
    RemoveVipPassengerMutationVariables
  >(RemoveVipPassengerDocument, options);
}
export type RemoveVipPassengerMutationHookResult = ReturnType<
  typeof useRemoveVipPassengerMutation
>;
export type RemoveVipPassengerMutationResult =
  Apollo.MutationResult<RemoveVipPassengerMutation>;
export type RemoveVipPassengerMutationOptions = Apollo.BaseMutationOptions<
  RemoveVipPassengerMutation,
  RemoveVipPassengerMutationVariables
>;
export const UpdateVipPassengerDocument = gql`
  mutation UpdateVipPassenger(
    $companyId: String!
    $id: ID!
    $input: UpdateVipPassengerInput!
  ) {
    updateVipPassenger(companyId: $companyId, id: $id, input: $input) {
      id
    }
  }
`;
export type UpdateVipPassengerMutationFn = Apollo.MutationFunction<
  UpdateVipPassengerMutation,
  UpdateVipPassengerMutationVariables
>;

/**
 * __useUpdateVipPassengerMutation__
 *
 * To run a mutation, you first call `useUpdateVipPassengerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVipPassengerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVipPassengerMutation, { data, loading, error }] = useUpdateVipPassengerMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateVipPassengerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateVipPassengerMutation,
    UpdateVipPassengerMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateVipPassengerMutation,
    UpdateVipPassengerMutationVariables
  >(UpdateVipPassengerDocument, options);
}
export type UpdateVipPassengerMutationHookResult = ReturnType<
  typeof useUpdateVipPassengerMutation
>;
export type UpdateVipPassengerMutationResult =
  Apollo.MutationResult<UpdateVipPassengerMutation>;
export type UpdateVipPassengerMutationOptions = Apollo.BaseMutationOptions<
  UpdateVipPassengerMutation,
  UpdateVipPassengerMutationVariables
>;
export const GetAirportDocument = gql`
  query GetAirport($filter: AirportUniqueFilterInput!) {
    airport(filter: $filter) {
      id
      code
      name
      city
      country
    }
  }
`;

/**
 * __useGetAirportQuery__
 *
 * To run a query within a React component, call `useGetAirportQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAirportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAirportQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetAirportQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAirportQuery,
    GetAirportQueryVariables
  > &
    (
      | { variables: GetAirportQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAirportQuery, GetAirportQueryVariables>(
    GetAirportDocument,
    options,
  );
}
export function useGetAirportLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAirportQuery,
    GetAirportQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAirportQuery, GetAirportQueryVariables>(
    GetAirportDocument,
    options,
  );
}
export function useGetAirportSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetAirportQuery,
        GetAirportQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetAirportQuery, GetAirportQueryVariables>(
    GetAirportDocument,
    options,
  );
}
export type GetAirportQueryHookResult = ReturnType<typeof useGetAirportQuery>;
export type GetAirportLazyQueryHookResult = ReturnType<
  typeof useGetAirportLazyQuery
>;
export type GetAirportSuspenseQueryHookResult = ReturnType<
  typeof useGetAirportSuspenseQuery
>;
export type GetAirportQueryResult = Apollo.QueryResult<
  GetAirportQuery,
  GetAirportQueryVariables
>;
export const GetAirportsDocument = gql`
  query GetAirports($filter: AirportFilterInput, $pagination: PaginationInput) {
    airports(filter: $filter, pagination: $pagination) {
      totalCount
      results {
        ...AirportFragment
      }
    }
  }
  ${AirportFragmentFragmentDoc}
`;

/**
 * __useGetAirportsQuery__
 *
 * To run a query within a React component, call `useGetAirportsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAirportsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAirportsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetAirportsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAirportsQuery,
    GetAirportsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAirportsQuery, GetAirportsQueryVariables>(
    GetAirportsDocument,
    options,
  );
}
export function useGetAirportsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAirportsQuery,
    GetAirportsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAirportsQuery, GetAirportsQueryVariables>(
    GetAirportsDocument,
    options,
  );
}
export function useGetAirportsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetAirportsQuery,
        GetAirportsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetAirportsQuery, GetAirportsQueryVariables>(
    GetAirportsDocument,
    options,
  );
}
export type GetAirportsQueryHookResult = ReturnType<typeof useGetAirportsQuery>;
export type GetAirportsLazyQueryHookResult = ReturnType<
  typeof useGetAirportsLazyQuery
>;
export type GetAirportsSuspenseQueryHookResult = ReturnType<
  typeof useGetAirportsSuspenseQuery
>;
export type GetAirportsQueryResult = Apollo.QueryResult<
  GetAirportsQuery,
  GetAirportsQueryVariables
>;
export const GetCompanyGroupsDocument = gql`
  query GetCompanyGroups(
    $filter: CompanyGroupFilterInput
    $pagination: PaginationInput
  ) {
    companyGroups(filter: $filter, pagination: $pagination) {
      results {
        ...CompanyGroupFragment
      }
      pagination {
        offset
        limit
      }
      totalCount
    }
  }
  ${CompanyGroupFragmentFragmentDoc}
`;

/**
 * __useGetCompanyGroupsQuery__
 *
 * To run a query within a React component, call `useGetCompanyGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyGroupsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetCompanyGroupsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCompanyGroupsQuery,
    GetCompanyGroupsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCompanyGroupsQuery, GetCompanyGroupsQueryVariables>(
    GetCompanyGroupsDocument,
    options,
  );
}
export function useGetCompanyGroupsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCompanyGroupsQuery,
    GetCompanyGroupsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCompanyGroupsQuery,
    GetCompanyGroupsQueryVariables
  >(GetCompanyGroupsDocument, options);
}
export function useGetCompanyGroupsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetCompanyGroupsQuery,
        GetCompanyGroupsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetCompanyGroupsQuery,
    GetCompanyGroupsQueryVariables
  >(GetCompanyGroupsDocument, options);
}
export type GetCompanyGroupsQueryHookResult = ReturnType<
  typeof useGetCompanyGroupsQuery
>;
export type GetCompanyGroupsLazyQueryHookResult = ReturnType<
  typeof useGetCompanyGroupsLazyQuery
>;
export type GetCompanyGroupsSuspenseQueryHookResult = ReturnType<
  typeof useGetCompanyGroupsSuspenseQuery
>;
export type GetCompanyGroupsQueryResult = Apollo.QueryResult<
  GetCompanyGroupsQuery,
  GetCompanyGroupsQueryVariables
>;
export const GetCompanyGroupDocument = gql`
  query GetCompanyGroup($id: ID!) {
    companyGroup(id: $id) {
      ...CompanyGroupFragment
    }
  }
  ${CompanyGroupFragmentFragmentDoc}
`;

/**
 * __useGetCompanyGroupQuery__
 *
 * To run a query within a React component, call `useGetCompanyGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyGroupQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCompanyGroupQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCompanyGroupQuery,
    GetCompanyGroupQueryVariables
  > &
    (
      | { variables: GetCompanyGroupQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCompanyGroupQuery, GetCompanyGroupQueryVariables>(
    GetCompanyGroupDocument,
    options,
  );
}
export function useGetCompanyGroupLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCompanyGroupQuery,
    GetCompanyGroupQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCompanyGroupQuery,
    GetCompanyGroupQueryVariables
  >(GetCompanyGroupDocument, options);
}
export function useGetCompanyGroupSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetCompanyGroupQuery,
        GetCompanyGroupQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetCompanyGroupQuery,
    GetCompanyGroupQueryVariables
  >(GetCompanyGroupDocument, options);
}
export type GetCompanyGroupQueryHookResult = ReturnType<
  typeof useGetCompanyGroupQuery
>;
export type GetCompanyGroupLazyQueryHookResult = ReturnType<
  typeof useGetCompanyGroupLazyQuery
>;
export type GetCompanyGroupSuspenseQueryHookResult = ReturnType<
  typeof useGetCompanyGroupSuspenseQuery
>;
export type GetCompanyGroupQueryResult = Apollo.QueryResult<
  GetCompanyGroupQuery,
  GetCompanyGroupQueryVariables
>;
export const GetCompanyGroupsAmountDocument = gql`
  query GetCompanyGroupsAmount {
    companyGroups {
      totalCount
    }
  }
`;

/**
 * __useGetCompanyGroupsAmountQuery__
 *
 * To run a query within a React component, call `useGetCompanyGroupsAmountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyGroupsAmountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyGroupsAmountQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCompanyGroupsAmountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCompanyGroupsAmountQuery,
    GetCompanyGroupsAmountQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetCompanyGroupsAmountQuery,
    GetCompanyGroupsAmountQueryVariables
  >(GetCompanyGroupsAmountDocument, options);
}
export function useGetCompanyGroupsAmountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCompanyGroupsAmountQuery,
    GetCompanyGroupsAmountQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCompanyGroupsAmountQuery,
    GetCompanyGroupsAmountQueryVariables
  >(GetCompanyGroupsAmountDocument, options);
}
export function useGetCompanyGroupsAmountSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetCompanyGroupsAmountQuery,
        GetCompanyGroupsAmountQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetCompanyGroupsAmountQuery,
    GetCompanyGroupsAmountQueryVariables
  >(GetCompanyGroupsAmountDocument, options);
}
export type GetCompanyGroupsAmountQueryHookResult = ReturnType<
  typeof useGetCompanyGroupsAmountQuery
>;
export type GetCompanyGroupsAmountLazyQueryHookResult = ReturnType<
  typeof useGetCompanyGroupsAmountLazyQuery
>;
export type GetCompanyGroupsAmountSuspenseQueryHookResult = ReturnType<
  typeof useGetCompanyGroupsAmountSuspenseQuery
>;
export type GetCompanyGroupsAmountQueryResult = Apollo.QueryResult<
  GetCompanyGroupsAmountQuery,
  GetCompanyGroupsAmountQueryVariables
>;
export const GetCompaniesDocument = gql`
  query GetCompanies(
    $filter: CompanyFilterInput
    $pagination: PaginationInput
  ) {
    companies(filter: $filter, pagination: $pagination) {
      totalCount
      pagination {
        limit
        offset
      }
      results {
        ...CompanyFragment
        lounges {
          id
          name
        }
      }
    }
  }
  ${CompanyFragmentFragmentDoc}
`;

/**
 * __useGetCompaniesQuery__
 *
 * To run a query within a React component, call `useGetCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompaniesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetCompaniesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCompaniesQuery,
    GetCompaniesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCompaniesQuery, GetCompaniesQueryVariables>(
    GetCompaniesDocument,
    options,
  );
}
export function useGetCompaniesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCompaniesQuery,
    GetCompaniesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCompaniesQuery, GetCompaniesQueryVariables>(
    GetCompaniesDocument,
    options,
  );
}
export function useGetCompaniesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetCompaniesQuery,
        GetCompaniesQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetCompaniesQuery, GetCompaniesQueryVariables>(
    GetCompaniesDocument,
    options,
  );
}
export type GetCompaniesQueryHookResult = ReturnType<
  typeof useGetCompaniesQuery
>;
export type GetCompaniesLazyQueryHookResult = ReturnType<
  typeof useGetCompaniesLazyQuery
>;
export type GetCompaniesSuspenseQueryHookResult = ReturnType<
  typeof useGetCompaniesSuspenseQuery
>;
export type GetCompaniesQueryResult = Apollo.QueryResult<
  GetCompaniesQuery,
  GetCompaniesQueryVariables
>;
export const GetCompanyListDocument = gql`
  query GetCompanyList($filter: CompanyFilterInput) {
    companies(filter: $filter) {
      totalCount
      pagination {
        limit
        offset
      }
      results {
        ...CompanyFragment
      }
    }
  }
  ${CompanyFragmentFragmentDoc}
`;

/**
 * __useGetCompanyListQuery__
 *
 * To run a query within a React component, call `useGetCompanyListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyListQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetCompanyListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCompanyListQuery,
    GetCompanyListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCompanyListQuery, GetCompanyListQueryVariables>(
    GetCompanyListDocument,
    options,
  );
}
export function useGetCompanyListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCompanyListQuery,
    GetCompanyListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCompanyListQuery, GetCompanyListQueryVariables>(
    GetCompanyListDocument,
    options,
  );
}
export function useGetCompanyListSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetCompanyListQuery,
        GetCompanyListQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetCompanyListQuery,
    GetCompanyListQueryVariables
  >(GetCompanyListDocument, options);
}
export type GetCompanyListQueryHookResult = ReturnType<
  typeof useGetCompanyListQuery
>;
export type GetCompanyListLazyQueryHookResult = ReturnType<
  typeof useGetCompanyListLazyQuery
>;
export type GetCompanyListSuspenseQueryHookResult = ReturnType<
  typeof useGetCompanyListSuspenseQuery
>;
export type GetCompanyListQueryResult = Apollo.QueryResult<
  GetCompanyListQuery,
  GetCompanyListQueryVariables
>;
export const GetCompanyDocument = gql`
  query GetCompany($id: ID!) {
    company(id: $id) {
      ...CompanyFragment
    }
  }
  ${CompanyFragmentFragmentDoc}
`;

/**
 * __useGetCompanyQuery__
 *
 * To run a query within a React component, call `useGetCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCompanyQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCompanyQuery,
    GetCompanyQueryVariables
  > &
    (
      | { variables: GetCompanyQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCompanyQuery, GetCompanyQueryVariables>(
    GetCompanyDocument,
    options,
  );
}
export function useGetCompanyLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCompanyQuery,
    GetCompanyQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCompanyQuery, GetCompanyQueryVariables>(
    GetCompanyDocument,
    options,
  );
}
export function useGetCompanySuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetCompanyQuery,
        GetCompanyQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetCompanyQuery, GetCompanyQueryVariables>(
    GetCompanyDocument,
    options,
  );
}
export type GetCompanyQueryHookResult = ReturnType<typeof useGetCompanyQuery>;
export type GetCompanyLazyQueryHookResult = ReturnType<
  typeof useGetCompanyLazyQuery
>;
export type GetCompanySuspenseQueryHookResult = ReturnType<
  typeof useGetCompanySuspenseQuery
>;
export type GetCompanyQueryResult = Apollo.QueryResult<
  GetCompanyQuery,
  GetCompanyQueryVariables
>;
export const GetCompaniesAmountDocument = gql`
  query GetCompaniesAmount {
    companies {
      totalCount
    }
  }
`;

/**
 * __useGetCompaniesAmountQuery__
 *
 * To run a query within a React component, call `useGetCompaniesAmountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompaniesAmountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompaniesAmountQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCompaniesAmountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCompaniesAmountQuery,
    GetCompaniesAmountQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetCompaniesAmountQuery,
    GetCompaniesAmountQueryVariables
  >(GetCompaniesAmountDocument, options);
}
export function useGetCompaniesAmountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCompaniesAmountQuery,
    GetCompaniesAmountQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCompaniesAmountQuery,
    GetCompaniesAmountQueryVariables
  >(GetCompaniesAmountDocument, options);
}
export function useGetCompaniesAmountSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetCompaniesAmountQuery,
        GetCompaniesAmountQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetCompaniesAmountQuery,
    GetCompaniesAmountQueryVariables
  >(GetCompaniesAmountDocument, options);
}
export type GetCompaniesAmountQueryHookResult = ReturnType<
  typeof useGetCompaniesAmountQuery
>;
export type GetCompaniesAmountLazyQueryHookResult = ReturnType<
  typeof useGetCompaniesAmountLazyQuery
>;
export type GetCompaniesAmountSuspenseQueryHookResult = ReturnType<
  typeof useGetCompaniesAmountSuspenseQuery
>;
export type GetCompaniesAmountQueryResult = Apollo.QueryResult<
  GetCompaniesAmountQuery,
  GetCompaniesAmountQueryVariables
>;
export const GetLoungeTiersDocument = gql`
  query GetLoungeTiers(
    $companyId: String
    $filter: LoungeTierFilterInput
    $pagination: PaginationInput
  ) {
    loungeTiers(
      companyId: $companyId
      filter: $filter
      pagination: $pagination
    ) {
      totalCount
      pagination {
        limit
        offset
      }
      results {
        ...LoungeTierFragment
      }
    }
  }
  ${LoungeTierFragmentFragmentDoc}
`;

/**
 * __useGetLoungeTiersQuery__
 *
 * To run a query within a React component, call `useGetLoungeTiersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLoungeTiersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLoungeTiersQuery({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      filter: // value for 'filter'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetLoungeTiersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetLoungeTiersQuery,
    GetLoungeTiersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetLoungeTiersQuery, GetLoungeTiersQueryVariables>(
    GetLoungeTiersDocument,
    options,
  );
}
export function useGetLoungeTiersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLoungeTiersQuery,
    GetLoungeTiersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetLoungeTiersQuery, GetLoungeTiersQueryVariables>(
    GetLoungeTiersDocument,
    options,
  );
}
export function useGetLoungeTiersSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetLoungeTiersQuery,
        GetLoungeTiersQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetLoungeTiersQuery,
    GetLoungeTiersQueryVariables
  >(GetLoungeTiersDocument, options);
}
export type GetLoungeTiersQueryHookResult = ReturnType<
  typeof useGetLoungeTiersQuery
>;
export type GetLoungeTiersLazyQueryHookResult = ReturnType<
  typeof useGetLoungeTiersLazyQuery
>;
export type GetLoungeTiersSuspenseQueryHookResult = ReturnType<
  typeof useGetLoungeTiersSuspenseQuery
>;
export type GetLoungeTiersQueryResult = Apollo.QueryResult<
  GetLoungeTiersQuery,
  GetLoungeTiersQueryVariables
>;
export const GetLoungeTiersAmountDocument = gql`
  query GetLoungeTiersAmount {
    loungeTiers {
      totalCount
    }
  }
`;

/**
 * __useGetLoungeTiersAmountQuery__
 *
 * To run a query within a React component, call `useGetLoungeTiersAmountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLoungeTiersAmountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLoungeTiersAmountQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLoungeTiersAmountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetLoungeTiersAmountQuery,
    GetLoungeTiersAmountQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetLoungeTiersAmountQuery,
    GetLoungeTiersAmountQueryVariables
  >(GetLoungeTiersAmountDocument, options);
}
export function useGetLoungeTiersAmountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLoungeTiersAmountQuery,
    GetLoungeTiersAmountQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetLoungeTiersAmountQuery,
    GetLoungeTiersAmountQueryVariables
  >(GetLoungeTiersAmountDocument, options);
}
export function useGetLoungeTiersAmountSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetLoungeTiersAmountQuery,
        GetLoungeTiersAmountQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetLoungeTiersAmountQuery,
    GetLoungeTiersAmountQueryVariables
  >(GetLoungeTiersAmountDocument, options);
}
export type GetLoungeTiersAmountQueryHookResult = ReturnType<
  typeof useGetLoungeTiersAmountQuery
>;
export type GetLoungeTiersAmountLazyQueryHookResult = ReturnType<
  typeof useGetLoungeTiersAmountLazyQuery
>;
export type GetLoungeTiersAmountSuspenseQueryHookResult = ReturnType<
  typeof useGetLoungeTiersAmountSuspenseQuery
>;
export type GetLoungeTiersAmountQueryResult = Apollo.QueryResult<
  GetLoungeTiersAmountQuery,
  GetLoungeTiersAmountQueryVariables
>;
export const GetLoungesDocument = gql`
  query GetLounges(
    $companyId: String
    $filter: LoungeFilterInput
    $pagination: PaginationInput
  ) {
    lounges(companyId: $companyId, filter: $filter, pagination: $pagination) {
      pagination {
        limit
        offset
      }
      totalCount
      results {
        ...LoungeFragment
      }
    }
  }
  ${LoungeFragmentFragmentDoc}
`;

/**
 * __useGetLoungesQuery__
 *
 * To run a query within a React component, call `useGetLoungesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLoungesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLoungesQuery({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      filter: // value for 'filter'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetLoungesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetLoungesQuery,
    GetLoungesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetLoungesQuery, GetLoungesQueryVariables>(
    GetLoungesDocument,
    options,
  );
}
export function useGetLoungesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLoungesQuery,
    GetLoungesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetLoungesQuery, GetLoungesQueryVariables>(
    GetLoungesDocument,
    options,
  );
}
export function useGetLoungesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetLoungesQuery,
        GetLoungesQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetLoungesQuery, GetLoungesQueryVariables>(
    GetLoungesDocument,
    options,
  );
}
export type GetLoungesQueryHookResult = ReturnType<typeof useGetLoungesQuery>;
export type GetLoungesLazyQueryHookResult = ReturnType<
  typeof useGetLoungesLazyQuery
>;
export type GetLoungesSuspenseQueryHookResult = ReturnType<
  typeof useGetLoungesSuspenseQuery
>;
export type GetLoungesQueryResult = Apollo.QueryResult<
  GetLoungesQuery,
  GetLoungesQueryVariables
>;
export const GetLoungesAmountDocument = gql`
  query GetLoungesAmount {
    lounges {
      totalCount
    }
  }
`;

/**
 * __useGetLoungesAmountQuery__
 *
 * To run a query within a React component, call `useGetLoungesAmountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLoungesAmountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLoungesAmountQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLoungesAmountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetLoungesAmountQuery,
    GetLoungesAmountQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetLoungesAmountQuery, GetLoungesAmountQueryVariables>(
    GetLoungesAmountDocument,
    options,
  );
}
export function useGetLoungesAmountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLoungesAmountQuery,
    GetLoungesAmountQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetLoungesAmountQuery,
    GetLoungesAmountQueryVariables
  >(GetLoungesAmountDocument, options);
}
export function useGetLoungesAmountSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetLoungesAmountQuery,
        GetLoungesAmountQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetLoungesAmountQuery,
    GetLoungesAmountQueryVariables
  >(GetLoungesAmountDocument, options);
}
export type GetLoungesAmountQueryHookResult = ReturnType<
  typeof useGetLoungesAmountQuery
>;
export type GetLoungesAmountLazyQueryHookResult = ReturnType<
  typeof useGetLoungesAmountLazyQuery
>;
export type GetLoungesAmountSuspenseQueryHookResult = ReturnType<
  typeof useGetLoungesAmountSuspenseQuery
>;
export type GetLoungesAmountQueryResult = Apollo.QueryResult<
  GetLoungesAmountQuery,
  GetLoungesAmountQueryVariables
>;
export const GetPermissionsDocument = gql`
  query GetPermissions($filter: PermissionFilterInput) {
    permissions(filter: $filter) {
      ...PermissionFragment
    }
  }
  ${PermissionFragmentFragmentDoc}
`;

/**
 * __useGetPermissionsQuery__
 *
 * To run a query within a React component, call `useGetPermissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPermissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPermissionsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetPermissionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPermissionsQuery,
    GetPermissionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPermissionsQuery, GetPermissionsQueryVariables>(
    GetPermissionsDocument,
    options,
  );
}
export function useGetPermissionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPermissionsQuery,
    GetPermissionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPermissionsQuery, GetPermissionsQueryVariables>(
    GetPermissionsDocument,
    options,
  );
}
export function useGetPermissionsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetPermissionsQuery,
        GetPermissionsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetPermissionsQuery,
    GetPermissionsQueryVariables
  >(GetPermissionsDocument, options);
}
export type GetPermissionsQueryHookResult = ReturnType<
  typeof useGetPermissionsQuery
>;
export type GetPermissionsLazyQueryHookResult = ReturnType<
  typeof useGetPermissionsLazyQuery
>;
export type GetPermissionsSuspenseQueryHookResult = ReturnType<
  typeof useGetPermissionsSuspenseQuery
>;
export type GetPermissionsQueryResult = Apollo.QueryResult<
  GetPermissionsQuery,
  GetPermissionsQueryVariables
>;
export const GetProfilesDocument = gql`
  query GetProfiles(
    $companyId: String
    $filter: ProfileFilterInput
    $pagination: PaginationInput
  ) {
    profiles(companyId: $companyId, filter: $filter, pagination: $pagination) {
      results {
        ...ProfileFragment
      }
      totalCount
      pagination {
        offset
        limit
      }
    }
  }
  ${ProfileFragmentFragmentDoc}
`;

/**
 * __useGetProfilesQuery__
 *
 * To run a query within a React component, call `useGetProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfilesQuery({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      filter: // value for 'filter'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetProfilesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProfilesQuery,
    GetProfilesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProfilesQuery, GetProfilesQueryVariables>(
    GetProfilesDocument,
    options,
  );
}
export function useGetProfilesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProfilesQuery,
    GetProfilesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProfilesQuery, GetProfilesQueryVariables>(
    GetProfilesDocument,
    options,
  );
}
export function useGetProfilesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetProfilesQuery,
        GetProfilesQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetProfilesQuery, GetProfilesQueryVariables>(
    GetProfilesDocument,
    options,
  );
}
export type GetProfilesQueryHookResult = ReturnType<typeof useGetProfilesQuery>;
export type GetProfilesLazyQueryHookResult = ReturnType<
  typeof useGetProfilesLazyQuery
>;
export type GetProfilesSuspenseQueryHookResult = ReturnType<
  typeof useGetProfilesSuspenseQuery
>;
export type GetProfilesQueryResult = Apollo.QueryResult<
  GetProfilesQuery,
  GetProfilesQueryVariables
>;
export const GetRuleEngineModelDocument = gql`
  query GetRuleEngineModel($companyId: String!, $id: ID!) {
    ruleEngineModel(companyId: $companyId, id: $id) {
      id
      model
    }
  }
`;

/**
 * __useGetRuleEngineModelQuery__
 *
 * To run a query within a React component, call `useGetRuleEngineModelQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRuleEngineModelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRuleEngineModelQuery({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRuleEngineModelQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetRuleEngineModelQuery,
    GetRuleEngineModelQueryVariables
  > &
    (
      | { variables: GetRuleEngineModelQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetRuleEngineModelQuery,
    GetRuleEngineModelQueryVariables
  >(GetRuleEngineModelDocument, options);
}
export function useGetRuleEngineModelLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRuleEngineModelQuery,
    GetRuleEngineModelQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetRuleEngineModelQuery,
    GetRuleEngineModelQueryVariables
  >(GetRuleEngineModelDocument, options);
}
export function useGetRuleEngineModelSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetRuleEngineModelQuery,
        GetRuleEngineModelQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetRuleEngineModelQuery,
    GetRuleEngineModelQueryVariables
  >(GetRuleEngineModelDocument, options);
}
export type GetRuleEngineModelQueryHookResult = ReturnType<
  typeof useGetRuleEngineModelQuery
>;
export type GetRuleEngineModelLazyQueryHookResult = ReturnType<
  typeof useGetRuleEngineModelLazyQuery
>;
export type GetRuleEngineModelSuspenseQueryHookResult = ReturnType<
  typeof useGetRuleEngineModelSuspenseQuery
>;
export type GetRuleEngineModelQueryResult = Apollo.QueryResult<
  GetRuleEngineModelQuery,
  GetRuleEngineModelQueryVariables
>;
export const GetRuleEngineModelsDocument = gql`
  query GetRuleEngineModels(
    $companyId: ID
    $filter: RuleEngineModelFilterInput
    $pagination: PaginationInput
    $sort: RuleEngineSortInput
  ) {
    ruleEngineModels(
      companyId: $companyId
      filter: $filter
      pagination: $pagination
      sort: $sort
    ) {
      totalCount
      pagination {
        offset
        limit
      }
      results {
        id
        createdAt
        isActive
        urlPath
        createdBy {
          id
          name
        }
        ruleEngine {
          id
          company {
            id
          }
          name
          type
          activeModelId
        }
      }
    }
  }
`;

/**
 * __useGetRuleEngineModelsQuery__
 *
 * To run a query within a React component, call `useGetRuleEngineModelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRuleEngineModelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRuleEngineModelsQuery({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      filter: // value for 'filter'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetRuleEngineModelsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetRuleEngineModelsQuery,
    GetRuleEngineModelsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetRuleEngineModelsQuery,
    GetRuleEngineModelsQueryVariables
  >(GetRuleEngineModelsDocument, options);
}
export function useGetRuleEngineModelsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRuleEngineModelsQuery,
    GetRuleEngineModelsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetRuleEngineModelsQuery,
    GetRuleEngineModelsQueryVariables
  >(GetRuleEngineModelsDocument, options);
}
export function useGetRuleEngineModelsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetRuleEngineModelsQuery,
        GetRuleEngineModelsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetRuleEngineModelsQuery,
    GetRuleEngineModelsQueryVariables
  >(GetRuleEngineModelsDocument, options);
}
export type GetRuleEngineModelsQueryHookResult = ReturnType<
  typeof useGetRuleEngineModelsQuery
>;
export type GetRuleEngineModelsLazyQueryHookResult = ReturnType<
  typeof useGetRuleEngineModelsLazyQuery
>;
export type GetRuleEngineModelsSuspenseQueryHookResult = ReturnType<
  typeof useGetRuleEngineModelsSuspenseQuery
>;
export type GetRuleEngineModelsQueryResult = Apollo.QueryResult<
  GetRuleEngineModelsQuery,
  GetRuleEngineModelsQueryVariables
>;
export const GetRuleEnginesDocument = gql`
  query GetRuleEngines(
    $companyId: ID
    $type: String
    $search: String
    $pagination: PaginationInput
    $sort: RuleEngineSortInput
    $withModels: Boolean
  ) {
    ruleEngines(
      companyId: $companyId
      type: $type
      search: $search
      pagination: $pagination
      sort: $sort
      withModels: $withModels
    ) {
      totalCount
      pagination {
        offset
        limit
      }
      results {
        id
        company {
          id
        }
        name
        type
        models {
          id
          createdAt
          isActive
          model
          urlPath
          createdBy {
            id
            name
          }
        }
      }
    }
  }
`;

/**
 * __useGetRuleEnginesQuery__
 *
 * To run a query within a React component, call `useGetRuleEnginesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRuleEnginesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRuleEnginesQuery({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      type: // value for 'type'
 *      search: // value for 'search'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *      withModels: // value for 'withModels'
 *   },
 * });
 */
export function useGetRuleEnginesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetRuleEnginesQuery,
    GetRuleEnginesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetRuleEnginesQuery, GetRuleEnginesQueryVariables>(
    GetRuleEnginesDocument,
    options,
  );
}
export function useGetRuleEnginesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRuleEnginesQuery,
    GetRuleEnginesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetRuleEnginesQuery, GetRuleEnginesQueryVariables>(
    GetRuleEnginesDocument,
    options,
  );
}
export function useGetRuleEnginesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetRuleEnginesQuery,
        GetRuleEnginesQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetRuleEnginesQuery,
    GetRuleEnginesQueryVariables
  >(GetRuleEnginesDocument, options);
}
export type GetRuleEnginesQueryHookResult = ReturnType<
  typeof useGetRuleEnginesQuery
>;
export type GetRuleEnginesLazyQueryHookResult = ReturnType<
  typeof useGetRuleEnginesLazyQuery
>;
export type GetRuleEnginesSuspenseQueryHookResult = ReturnType<
  typeof useGetRuleEnginesSuspenseQuery
>;
export type GetRuleEnginesQueryResult = Apollo.QueryResult<
  GetRuleEnginesQuery,
  GetRuleEnginesQueryVariables
>;
export const GetSettlementChargeRulesDocument = gql`
  query GetSettlementChargeRules(
    $companyId: String
    $filter: SettlementChargeRuleFilterInput
    $pagination: PaginationInput
  ) {
    settlementChargeRules(
      companyId: $companyId
      filter: $filter
      pagination: $pagination
    ) {
      totalCount
      pagination {
        offset
        limit
      }
      results {
        ...SettlementChargeRuleFragment
      }
    }
  }
  ${SettlementChargeRuleFragmentFragmentDoc}
`;

/**
 * __useGetSettlementChargeRulesQuery__
 *
 * To run a query within a React component, call `useGetSettlementChargeRulesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSettlementChargeRulesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSettlementChargeRulesQuery({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      filter: // value for 'filter'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetSettlementChargeRulesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetSettlementChargeRulesQuery,
    GetSettlementChargeRulesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetSettlementChargeRulesQuery,
    GetSettlementChargeRulesQueryVariables
  >(GetSettlementChargeRulesDocument, options);
}
export function useGetSettlementChargeRulesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSettlementChargeRulesQuery,
    GetSettlementChargeRulesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetSettlementChargeRulesQuery,
    GetSettlementChargeRulesQueryVariables
  >(GetSettlementChargeRulesDocument, options);
}
export function useGetSettlementChargeRulesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetSettlementChargeRulesQuery,
        GetSettlementChargeRulesQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetSettlementChargeRulesQuery,
    GetSettlementChargeRulesQueryVariables
  >(GetSettlementChargeRulesDocument, options);
}
export type GetSettlementChargeRulesQueryHookResult = ReturnType<
  typeof useGetSettlementChargeRulesQuery
>;
export type GetSettlementChargeRulesLazyQueryHookResult = ReturnType<
  typeof useGetSettlementChargeRulesLazyQuery
>;
export type GetSettlementChargeRulesSuspenseQueryHookResult = ReturnType<
  typeof useGetSettlementChargeRulesSuspenseQuery
>;
export type GetSettlementChargeRulesQueryResult = Apollo.QueryResult<
  GetSettlementChargeRulesQuery,
  GetSettlementChargeRulesQueryVariables
>;
export const GetSettlementChargeRuleDocument = gql`
  query GetSettlementChargeRule($companyId: String!, $id: Int!) {
    settlementChargeRule(companyId: $companyId, id: $id) {
      ...SettlementChargeRuleFragment
    }
  }
  ${SettlementChargeRuleFragmentFragmentDoc}
`;

/**
 * __useGetSettlementChargeRuleQuery__
 *
 * To run a query within a React component, call `useGetSettlementChargeRuleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSettlementChargeRuleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSettlementChargeRuleQuery({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSettlementChargeRuleQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetSettlementChargeRuleQuery,
    GetSettlementChargeRuleQueryVariables
  > &
    (
      | { variables: GetSettlementChargeRuleQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetSettlementChargeRuleQuery,
    GetSettlementChargeRuleQueryVariables
  >(GetSettlementChargeRuleDocument, options);
}
export function useGetSettlementChargeRuleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSettlementChargeRuleQuery,
    GetSettlementChargeRuleQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetSettlementChargeRuleQuery,
    GetSettlementChargeRuleQueryVariables
  >(GetSettlementChargeRuleDocument, options);
}
export function useGetSettlementChargeRuleSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetSettlementChargeRuleQuery,
        GetSettlementChargeRuleQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetSettlementChargeRuleQuery,
    GetSettlementChargeRuleQueryVariables
  >(GetSettlementChargeRuleDocument, options);
}
export type GetSettlementChargeRuleQueryHookResult = ReturnType<
  typeof useGetSettlementChargeRuleQuery
>;
export type GetSettlementChargeRuleLazyQueryHookResult = ReturnType<
  typeof useGetSettlementChargeRuleLazyQuery
>;
export type GetSettlementChargeRuleSuspenseQueryHookResult = ReturnType<
  typeof useGetSettlementChargeRuleSuspenseQuery
>;
export type GetSettlementChargeRuleQueryResult = Apollo.QueryResult<
  GetSettlementChargeRuleQuery,
  GetSettlementChargeRuleQueryVariables
>;
export const GetAuthenticationOptionsDocument = gql`
  query GetAuthenticationOptions($companyId: String) {
    authenticationOptions(companyId: $companyId) {
      id
      type
      code
      name
      display
    }
  }
`;

/**
 * __useGetAuthenticationOptionsQuery__
 *
 * To run a query within a React component, call `useGetAuthenticationOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthenticationOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthenticationOptionsQuery({
 *   variables: {
 *      companyId: // value for 'companyId'
 *   },
 * });
 */
export function useGetAuthenticationOptionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAuthenticationOptionsQuery,
    GetAuthenticationOptionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetAuthenticationOptionsQuery,
    GetAuthenticationOptionsQueryVariables
  >(GetAuthenticationOptionsDocument, options);
}
export function useGetAuthenticationOptionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAuthenticationOptionsQuery,
    GetAuthenticationOptionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAuthenticationOptionsQuery,
    GetAuthenticationOptionsQueryVariables
  >(GetAuthenticationOptionsDocument, options);
}
export function useGetAuthenticationOptionsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetAuthenticationOptionsQuery,
        GetAuthenticationOptionsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetAuthenticationOptionsQuery,
    GetAuthenticationOptionsQueryVariables
  >(GetAuthenticationOptionsDocument, options);
}
export type GetAuthenticationOptionsQueryHookResult = ReturnType<
  typeof useGetAuthenticationOptionsQuery
>;
export type GetAuthenticationOptionsLazyQueryHookResult = ReturnType<
  typeof useGetAuthenticationOptionsLazyQuery
>;
export type GetAuthenticationOptionsSuspenseQueryHookResult = ReturnType<
  typeof useGetAuthenticationOptionsSuspenseQuery
>;
export type GetAuthenticationOptionsQueryResult = Apollo.QueryResult<
  GetAuthenticationOptionsQuery,
  GetAuthenticationOptionsQueryVariables
>;
export const GetUsersDocument = gql`
  query GetUsers($filter: UserFilterInput, $pagination: PaginationInput) {
    users(filter: $filter, pagination: $pagination) {
      results {
        ...UserFragment
        lounges {
          id
          code
          status
        }
      }
      totalCount
      pagination {
        offset
        limit
      }
    }
  }
  ${UserFragmentFragmentDoc}
`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options,
  );
}
export function useGetUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options,
  );
}
export function useGetUsersSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options,
  );
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<
  typeof useGetUsersLazyQuery
>;
export type GetUsersSuspenseQueryHookResult = ReturnType<
  typeof useGetUsersSuspenseQuery
>;
export type GetUsersQueryResult = Apollo.QueryResult<
  GetUsersQuery,
  GetUsersQueryVariables
>;
export const GetUserDocument = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      ...UserFragment
    }
  }
  ${UserFragmentFragmentDoc}
`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables> &
    ({ variables: GetUserQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options,
  );
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserQuery,
    GetUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options,
  );
}
export function useGetUserSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options,
  );
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<
  typeof useGetUserSuspenseQuery
>;
export type GetUserQueryResult = Apollo.QueryResult<
  GetUserQuery,
  GetUserQueryVariables
>;
export const GetVipPassengerDocument = gql`
  query GetVipPassenger($companyId: String!, $id: ID!) {
    vipPassenger(companyId: $companyId, id: $id) {
      ...VipPassengerFragment
    }
  }
  ${VipPassengerFragmentFragmentDoc}
`;

/**
 * __useGetVipPassengerQuery__
 *
 * To run a query within a React component, call `useGetVipPassengerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVipPassengerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVipPassengerQuery({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetVipPassengerQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetVipPassengerQuery,
    GetVipPassengerQueryVariables
  > &
    (
      | { variables: GetVipPassengerQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetVipPassengerQuery, GetVipPassengerQueryVariables>(
    GetVipPassengerDocument,
    options,
  );
}
export function useGetVipPassengerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetVipPassengerQuery,
    GetVipPassengerQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetVipPassengerQuery,
    GetVipPassengerQueryVariables
  >(GetVipPassengerDocument, options);
}
export function useGetVipPassengerSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetVipPassengerQuery,
        GetVipPassengerQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetVipPassengerQuery,
    GetVipPassengerQueryVariables
  >(GetVipPassengerDocument, options);
}
export type GetVipPassengerQueryHookResult = ReturnType<
  typeof useGetVipPassengerQuery
>;
export type GetVipPassengerLazyQueryHookResult = ReturnType<
  typeof useGetVipPassengerLazyQuery
>;
export type GetVipPassengerSuspenseQueryHookResult = ReturnType<
  typeof useGetVipPassengerSuspenseQuery
>;
export type GetVipPassengerQueryResult = Apollo.QueryResult<
  GetVipPassengerQuery,
  GetVipPassengerQueryVariables
>;
export const GetVipPassengersDocument = gql`
  query GetVipPassengers(
    $companyId: String!
    $filter: VipPassengerFilterInput
    $pagination: PaginationInput
    $sort: VipPassengerSortInput
  ) {
    vipPassengers(
      companyId: $companyId
      filter: $filter
      pagination: $pagination
      sort: $sort
    ) {
      totalCount
      pagination {
        offset
        limit
      }
      results {
        ...VipPassengerFragment
      }
    }
  }
  ${VipPassengerFragmentFragmentDoc}
`;

/**
 * __useGetVipPassengersQuery__
 *
 * To run a query within a React component, call `useGetVipPassengersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVipPassengersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVipPassengersQuery({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      filter: // value for 'filter'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetVipPassengersQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetVipPassengersQuery,
    GetVipPassengersQueryVariables
  > &
    (
      | { variables: GetVipPassengersQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetVipPassengersQuery, GetVipPassengersQueryVariables>(
    GetVipPassengersDocument,
    options,
  );
}
export function useGetVipPassengersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetVipPassengersQuery,
    GetVipPassengersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetVipPassengersQuery,
    GetVipPassengersQueryVariables
  >(GetVipPassengersDocument, options);
}
export function useGetVipPassengersSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetVipPassengersQuery,
        GetVipPassengersQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetVipPassengersQuery,
    GetVipPassengersQueryVariables
  >(GetVipPassengersDocument, options);
}
export type GetVipPassengersQueryHookResult = ReturnType<
  typeof useGetVipPassengersQuery
>;
export type GetVipPassengersLazyQueryHookResult = ReturnType<
  typeof useGetVipPassengersLazyQuery
>;
export type GetVipPassengersSuspenseQueryHookResult = ReturnType<
  typeof useGetVipPassengersSuspenseQuery
>;
export type GetVipPassengersQueryResult = Apollo.QueryResult<
  GetVipPassengersQuery,
  GetVipPassengersQueryVariables
>;
