# Tokens

Types:

- <code><a href="./src/resources/tokens.ts">TokenGenerateResponse</a></code>

Methods:

- <code title="post /token">client.tokens.<a href="./src/resources/tokens.ts">generate</a>({ ...params }) -> TokenGenerateResponse</code>

# Root

Types:

- <code><a href="./src/resources/root.ts">RootListResponse</a></code>

Methods:

- <code title="get /">client.root.<a href="./src/resources/root.ts">list</a>() -> RootListResponse</code>

# Accounts

Types:

- <code><a href="./src/resources/accounts/accounts.ts">AccountRetrieveResponse</a></code>

Methods:

- <code title="get /accounts/{id}">client.accounts.<a href="./src/resources/accounts/accounts.ts">retrieve</a>(id) -> AccountRetrieveResponse</code>

## FundingSources

Types:

- <code><a href="./src/resources/accounts/funding-sources.ts">FundingSourceListResponse</a></code>

Methods:

- <code title="get /accounts/{id}/funding-sources">client.accounts.fundingSources.<a href="./src/resources/accounts/funding-sources.ts">list</a>(id, { ...params }) -> FundingSourceListResponse</code>

## Transfers

Types:

- <code><a href="./src/resources/accounts/transfers.ts">TransferListResponse</a></code>

Methods:

- <code title="get /accounts/{id}/transfers">client.accounts.transfers.<a href="./src/resources/accounts/transfers.ts">list</a>(id, { ...params }) -> TransferListResponse</code>

## MassPayments

Types:

- <code><a href="./src/resources/accounts/mass-payments.ts">MassPaymentListResponse</a></code>

Methods:

- <code title="get /accounts/{id}/mass-payments">client.accounts.massPayments.<a href="./src/resources/accounts/mass-payments.ts">list</a>(id, { ...params }) -> MassPaymentListResponse</code>

# FundingSources

Types:

- <code><a href="./src/resources/funding-sources/funding-sources.ts">FundingSourceRetrieveResponse</a></code>
- <code><a href="./src/resources/funding-sources/funding-sources.ts">FundingSourceUpdateResponse</a></code>

Methods:

- <code title="post /funding-sources">client.fundingSources.<a href="./src/resources/funding-sources/funding-sources.ts">create</a>({ ...params }) -> void</code>
- <code title="get /funding-sources/{id}">client.fundingSources.<a href="./src/resources/funding-sources/funding-sources.ts">retrieve</a>(id) -> FundingSourceRetrieveResponse</code>
- <code title="post /funding-sources/{id}">client.fundingSources.<a href="./src/resources/funding-sources/funding-sources.ts">update</a>(id, { ...params }) -> unknown</code>

## MicroDeposits

Types:

- <code><a href="./src/resources/funding-sources/micro-deposits.ts">MicroDepositRetrieveResponse</a></code>

Methods:

- <code title="get /funding-sources/{id}/micro-deposits">client.fundingSources.microDeposits.<a href="./src/resources/funding-sources/micro-deposits.ts">retrieve</a>(id) -> MicroDepositRetrieveResponse</code>
- <code title="post /funding-sources/{id}/micro-deposits">client.fundingSources.microDeposits.<a href="./src/resources/funding-sources/micro-deposits.ts">initiate</a>(id, { ...params }) -> void</code>

## Balance

Types:

- <code><a href="./src/resources/funding-sources/balance.ts">BalanceRetrieveResponse</a></code>

Methods:

- <code title="get /funding-sources/{id}/balance">client.fundingSources.balance.<a href="./src/resources/funding-sources/balance.ts">retrieve</a>(id) -> BalanceRetrieveResponse</code>

## ACHRouting

Types:

- <code><a href="./src/resources/funding-sources/ach-routing.ts">ACHRoutingRetrieveResponse</a></code>

Methods:

- <code title="get /funding-sources/{id}/ach-routing">client.fundingSources.achRouting.<a href="./src/resources/funding-sources/ach-routing.ts">retrieve</a>(id) -> ACHRoutingRetrieveResponse</code>

# Customers

Types:

- <code><a href="./src/resources/customers/customers.ts">CustomerRetrieveResponse</a></code>
- <code><a href="./src/resources/customers/customers.ts">CustomerUpdateResponse</a></code>
- <code><a href="./src/resources/customers/customers.ts">CustomerListResponse</a></code>

Methods:

- <code title="post /customers">client.customers.<a href="./src/resources/customers/customers.ts">create</a>({ ...params }) -> void</code>
- <code title="get /customers/{id}">client.customers.<a href="./src/resources/customers/customers.ts">retrieve</a>(id) -> CustomerRetrieveResponse</code>
- <code title="post /customers/{id}">client.customers.<a href="./src/resources/customers/customers.ts">update</a>(id, { ...params }) -> CustomerUpdateResponse</code>
- <code title="get /customers">client.customers.<a href="./src/resources/customers/customers.ts">list</a>({ ...params }) -> CustomerListResponse</code>

## BeneficialOwners

Types:

- <code><a href="./src/resources/customers/beneficial-owners.ts">BeneficialOwnerListResponse</a></code>

Methods:

- <code title="post /customers/{id}/beneficial-owners">client.customers.beneficialOwners.<a href="./src/resources/customers/beneficial-owners.ts">create</a>(id, { ...params }) -> void</code>
- <code title="get /customers/{id}/beneficial-owners">client.customers.beneficialOwners.<a href="./src/resources/customers/beneficial-owners.ts">list</a>(id) -> BeneficialOwnerListResponse</code>

## BeneficialOwnership

Types:

- <code><a href="./src/resources/customers/beneficial-ownership.ts">BeneficialOwnershipRetrieveResponse</a></code>
- <code><a href="./src/resources/customers/beneficial-ownership.ts">BeneficialOwnershipCertifyResponse</a></code>

Methods:

- <code title="get /customers/{id}/beneficial-ownership">client.customers.beneficialOwnership.<a href="./src/resources/customers/beneficial-ownership.ts">retrieve</a>(id) -> BeneficialOwnershipRetrieveResponse</code>
- <code title="post /customers/{id}/beneficial-ownership">client.customers.beneficialOwnership.<a href="./src/resources/customers/beneficial-ownership.ts">certify</a>(id, { ...params }) -> BeneficialOwnershipCertifyResponse</code>

## Documents

Types:

- <code><a href="./src/resources/customers/documents.ts">DocumentListResponse</a></code>

Methods:

- <code title="post /customers/{id}/documents">client.customers.documents.<a href="./src/resources/customers/documents.ts">create</a>(id, { ...params }) -> void</code>
- <code title="get /customers/{id}/documents">client.customers.documents.<a href="./src/resources/customers/documents.ts">list</a>(id) -> DocumentListResponse</code>

## Kba

Methods:

- <code title="post /customers/{id}/kba">client.customers.kba.<a href="./src/resources/customers/kba.ts">initiate</a>(id) -> void</code>

## FundingSources

Types:

- <code><a href="./src/resources/customers/funding-sources.ts">FundingSourceListResponse</a></code>

Methods:

- <code title="post /customers/{id}/funding-sources">client.customers.fundingSources.<a href="./src/resources/customers/funding-sources.ts">create</a>(id, { ...params }) -> void</code>
- <code title="get /customers/{id}/funding-sources">client.customers.fundingSources.<a href="./src/resources/customers/funding-sources.ts">list</a>(id) -> FundingSourceListResponse</code>

## FundingSourcesToken

Types:

- <code><a href="./src/resources/customers/funding-sources-token.ts">FundingSourcesTokenCreateResponse</a></code>

Methods:

- <code title="post /customers/{id}/funding-sources-token">client.customers.fundingSourcesToken.<a href="./src/resources/customers/funding-sources-token.ts">create</a>(id) -> FundingSourcesTokenCreateResponse</code>

## IavToken

Types:

- <code><a href="./src/resources/customers/iav-token.ts">IavTokenCreateResponse</a></code>

Methods:

- <code title="post /customers/{id}/iav-token">client.customers.iavToken.<a href="./src/resources/customers/iav-token.ts">create</a>(id) -> IavTokenCreateResponse</code>

## Transfers

Types:

- <code><a href="./src/resources/customers/transfers.ts">TransferListResponse</a></code>

Methods:

- <code title="get /customers/{id}/transfers">client.customers.transfers.<a href="./src/resources/customers/transfers.ts">list</a>(id, { ...params }) -> TransferListResponse</code>

## MassPayments

Types:

- <code><a href="./src/resources/customers/mass-payments.ts">MassPaymentListResponse</a></code>

Methods:

- <code title="get /customers/{id}/mass-payments">client.customers.massPayments.<a href="./src/resources/customers/mass-payments.ts">list</a>(id, { ...params }) -> MassPaymentListResponse</code>

## Labels

Types:

- <code><a href="./src/resources/customers/labels.ts">LabelListResponse</a></code>

Methods:

- <code title="post /customers/{id}/labels">client.customers.labels.<a href="./src/resources/customers/labels.ts">create</a>(id, { ...params }) -> void</code>
- <code title="get /customers/{id}/labels">client.customers.labels.<a href="./src/resources/customers/labels.ts">list</a>(id, { ...params }) -> LabelListResponse</code>

## Exchanges

Types:

- <code><a href="./src/resources/customers/exchanges.ts">ExchangeListResponse</a></code>

Methods:

- <code title="post /customers/{id}/exchanges">client.customers.exchanges.<a href="./src/resources/customers/exchanges.ts">create</a>(id, { ...params }) -> void</code>
- <code title="get /customers/{id}/exchanges">client.customers.exchanges.<a href="./src/resources/customers/exchanges.ts">list</a>(id) -> ExchangeListResponse</code>

# BusinessClassifications

Types:

- <code><a href="./src/resources/business-classifications.ts">BusinessClassificationRetrieveResponse</a></code>
- <code><a href="./src/resources/business-classifications.ts">BusinessClassificationListResponse</a></code>

Methods:

- <code title="get /business-classifications/{id}">client.businessClassifications.<a href="./src/resources/business-classifications.ts">retrieve</a>(id) -> BusinessClassificationRetrieveResponse</code>
- <code title="get /business-classifications">client.businessClassifications.<a href="./src/resources/business-classifications.ts">list</a>() -> BusinessClassificationListResponse</code>

# BeneficialOwners

Types:

- <code><a href="./src/resources/beneficial-owners/beneficial-owners.ts">BeneficialOwnerRetrieveResponse</a></code>
- <code><a href="./src/resources/beneficial-owners/beneficial-owners.ts">BeneficialOwnerUpdateResponse</a></code>
- <code><a href="./src/resources/beneficial-owners/beneficial-owners.ts">BeneficialOwnerDeleteResponse</a></code>

Methods:

- <code title="get /beneficial-owners/{id}">client.beneficialOwners.<a href="./src/resources/beneficial-owners/beneficial-owners.ts">retrieve</a>(id) -> BeneficialOwnerRetrieveResponse</code>
- <code title="post /beneficial-owners/{id}">client.beneficialOwners.<a href="./src/resources/beneficial-owners/beneficial-owners.ts">update</a>(id, { ...params }) -> BeneficialOwnerUpdateResponse</code>
- <code title="delete /beneficial-owners/{id}">client.beneficialOwners.<a href="./src/resources/beneficial-owners/beneficial-owners.ts">delete</a>(id) -> unknown</code>

## Documents

Types:

- <code><a href="./src/resources/beneficial-owners/documents.ts">DocumentListResponse</a></code>

Methods:

- <code title="post /beneficial-owners/{id}/documents">client.beneficialOwners.documents.<a href="./src/resources/beneficial-owners/documents.ts">create</a>(id, { ...params }) -> void</code>
- <code title="get /beneficial-owners/{id}/documents">client.beneficialOwners.documents.<a href="./src/resources/beneficial-owners/documents.ts">list</a>(id) -> DocumentListResponse</code>

# Documents

Types:

- <code><a href="./src/resources/documents.ts">DocumentRetrieveResponse</a></code>

Methods:

- <code title="get /documents/{id}">client.documents.<a href="./src/resources/documents.ts">retrieve</a>(id) -> DocumentRetrieveResponse</code>

# Kba

Types:

- <code><a href="./src/resources/kba.ts">KbaRetrieveQuestionsResponse</a></code>
- <code><a href="./src/resources/kba.ts">KbaVerifyResponse</a></code>

Methods:

- <code title="get /kba/{id}">client.kba.<a href="./src/resources/kba.ts">retrieveQuestions</a>(id) -> KbaRetrieveQuestionsResponse</code>
- <code title="post /kba/{id}">client.kba.<a href="./src/resources/kba.ts">verify</a>(id, { ...params }) -> KbaVerifyResponse</code>

# Transfers

Types:

- <code><a href="./src/resources/transfers/transfers.ts">TransferRetrieveResponse</a></code>
- <code><a href="./src/resources/transfers/transfers.ts">TransferCancelResponse</a></code>

Methods:

- <code title="get /transfers/{id}">client.transfers.<a href="./src/resources/transfers/transfers.ts">retrieve</a>(id) -> TransferRetrieveResponse</code>
- <code title="post /transfers/{id}">client.transfers.<a href="./src/resources/transfers/transfers.ts">cancel</a>(id, { ...params }) -> unknown</code>
- <code title="post /transfers">client.transfers.<a href="./src/resources/transfers/transfers.ts">initiate</a>({ ...params }) -> void</code>

## Fees

Types:

- <code><a href="./src/resources/transfers/fees.ts">FeeListResponse</a></code>

Methods:

- <code title="get /transfers/{id}/fees">client.transfers.fees.<a href="./src/resources/transfers/fees.ts">list</a>(id) -> FeeListResponse</code>

## Failure

Types:

- <code><a href="./src/resources/transfers/failure.ts">FailureRetrieveResponse</a></code>

Methods:

- <code title="get /transfers/{id}/failure">client.transfers.failure.<a href="./src/resources/transfers/failure.ts">retrieve</a>(id) -> FailureRetrieveResponse</code>

# OnDemandAuthorizations

Types:

- <code><a href="./src/resources/on-demand-authorizations.ts">OnDemandAuthorizationCreateResponse</a></code>

Methods:

- <code title="post /on-demand-authorizations">client.onDemandAuthorizations.<a href="./src/resources/on-demand-authorizations.ts">create</a>() -> OnDemandAuthorizationCreateResponse</code>

# MassPayments

Types:

- <code><a href="./src/resources/mass-payments/mass-payments.ts">MassPaymentRetrieveResponse</a></code>
- <code><a href="./src/resources/mass-payments/mass-payments.ts">MassPaymentUpdateResponse</a></code>

Methods:

- <code title="post /mass-payments">client.massPayments.<a href="./src/resources/mass-payments/mass-payments.ts">create</a>({ ...params }) -> void</code>
- <code title="get /mass-payments/{id}">client.massPayments.<a href="./src/resources/mass-payments/mass-payments.ts">retrieve</a>(id) -> MassPaymentRetrieveResponse</code>
- <code title="post /mass-payments/{id}">client.massPayments.<a href="./src/resources/mass-payments/mass-payments.ts">update</a>(id, { ...params }) -> MassPaymentUpdateResponse</code>

## Items

Types:

- <code><a href="./src/resources/mass-payments/items.ts">ItemListResponse</a></code>

Methods:

- <code title="get /mass-payments/{id}/items">client.massPayments.items.<a href="./src/resources/mass-payments/items.ts">list</a>(id, { ...params }) -> ItemListResponse</code>

# MassPaymentItems

Types:

- <code><a href="./src/resources/mass-payment-items.ts">MassPaymentItemRetrieveResponse</a></code>

Methods:

- <code title="get /mass-payment-items/{id}">client.massPaymentItems.<a href="./src/resources/mass-payment-items.ts">retrieve</a>(id) -> MassPaymentItemRetrieveResponse</code>

# Labels

Types:

- <code><a href="./src/resources/labels/labels.ts">LabelRetrieveResponse</a></code>
- <code><a href="./src/resources/labels/labels.ts">LabelRemoveResponse</a></code>

Methods:

- <code title="get /labels/{id}">client.labels.<a href="./src/resources/labels/labels.ts">retrieve</a>(id) -> LabelRetrieveResponse</code>
- <code title="delete /labels/{id}">client.labels.<a href="./src/resources/labels/labels.ts">remove</a>(id) -> LabelRemoveResponse</code>

## LedgerEntries

Types:

- <code><a href="./src/resources/labels/ledger-entries.ts">LedgerEntryListResponse</a></code>

Methods:

- <code title="post /labels/{id}/ledger-entries">client.labels.ledgerEntries.<a href="./src/resources/labels/ledger-entries.ts">create</a>(id, { ...params }) -> void</code>
- <code title="get /labels/{id}/ledger-entries">client.labels.ledgerEntries.<a href="./src/resources/labels/ledger-entries.ts">list</a>(id, { ...params }) -> LedgerEntryListResponse</code>

# LedgerEntries

Types:

- <code><a href="./src/resources/ledger-entries.ts">LedgerEntryRetrieveResponse</a></code>

Methods:

- <code title="get /ledger-entries/{id}">client.ledgerEntries.<a href="./src/resources/ledger-entries.ts">retrieve</a>(id) -> LedgerEntryRetrieveResponse</code>

# LabelReallocations

Types:

- <code><a href="./src/resources/label-reallocations.ts">LabelReallocationRetrieveResponse</a></code>

Methods:

- <code title="post /label-reallocations">client.labelReallocations.<a href="./src/resources/label-reallocations.ts">create</a>({ ...params }) -> void</code>
- <code title="get /label-reallocations/{id}">client.labelReallocations.<a href="./src/resources/label-reallocations.ts">retrieve</a>(id) -> LabelReallocationRetrieveResponse</code>

# Events

Types:

- <code><a href="./src/resources/events.ts">EventRetrieveResponse</a></code>
- <code><a href="./src/resources/events.ts">EventListResponse</a></code>

Methods:

- <code title="get /events/{id}">client.events.<a href="./src/resources/events.ts">retrieve</a>(id) -> EventRetrieveResponse</code>
- <code title="get /events">client.events.<a href="./src/resources/events.ts">list</a>() -> EventListResponse</code>

# WebhookSubscriptions

Types:

- <code><a href="./src/resources/webhook-subscriptions/webhook-subscriptions.ts">WebhookSubscriptionRetrieveResponse</a></code>
- <code><a href="./src/resources/webhook-subscriptions/webhook-subscriptions.ts">WebhookSubscriptionUpdateResponse</a></code>
- <code><a href="./src/resources/webhook-subscriptions/webhook-subscriptions.ts">WebhookSubscriptionListResponse</a></code>
- <code><a href="./src/resources/webhook-subscriptions/webhook-subscriptions.ts">WebhookSubscriptionDeleteResponse</a></code>

Methods:

- <code title="post /webhook-subscriptions">client.webhookSubscriptions.<a href="./src/resources/webhook-subscriptions/webhook-subscriptions.ts">create</a>({ ...params }) -> void</code>
- <code title="get /webhook-subscriptions/{id}">client.webhookSubscriptions.<a href="./src/resources/webhook-subscriptions/webhook-subscriptions.ts">retrieve</a>(id) -> WebhookSubscriptionRetrieveResponse</code>
- <code title="post /webhook-subscriptions/{id}">client.webhookSubscriptions.<a href="./src/resources/webhook-subscriptions/webhook-subscriptions.ts">update</a>(id, { ...params }) -> WebhookSubscriptionUpdateResponse</code>
- <code title="get /webhook-subscriptions">client.webhookSubscriptions.<a href="./src/resources/webhook-subscriptions/webhook-subscriptions.ts">list</a>() -> WebhookSubscriptionListResponse</code>
- <code title="delete /webhook-subscriptions/{id}">client.webhookSubscriptions.<a href="./src/resources/webhook-subscriptions/webhook-subscriptions.ts">delete</a>(id) -> WebhookSubscriptionDeleteResponse</code>

## Webhooks

Types:

- <code><a href="./src/resources/webhook-subscriptions/webhooks.ts">WebhookListResponse</a></code>

Methods:

- <code title="get /webhook-subscriptions/{id}/webhooks">client.webhookSubscriptions.webhooks.<a href="./src/resources/webhook-subscriptions/webhooks.ts">list</a>(id, { ...params }) -> WebhookListResponse</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks/webhooks.ts">WebhookRetrieveResponse</a></code>

Methods:

- <code title="get /webhooks/{id}">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">retrieve</a>(id) -> WebhookRetrieveResponse</code>

## Retries

Types:

- <code><a href="./src/resources/webhooks/retries.ts">RetryListResponse</a></code>

Methods:

- <code title="get /webhooks/{id}/retries">client.webhooks.retries.<a href="./src/resources/webhooks/retries.ts">list</a>(id) -> RetryListResponse</code>

# ExchangePartners

Types:

- <code><a href="./src/resources/exchange-partners.ts">ExchangePartnerRetrieveResponse</a></code>
- <code><a href="./src/resources/exchange-partners.ts">ExchangePartnerListResponse</a></code>

Methods:

- <code title="get /exchange-partners/{id}">client.exchangePartners.<a href="./src/resources/exchange-partners.ts">retrieve</a>(id) -> ExchangePartnerRetrieveResponse</code>
- <code title="get /exchange-partners">client.exchangePartners.<a href="./src/resources/exchange-partners.ts">list</a>() -> ExchangePartnerListResponse</code>

# Exchanges

Types:

- <code><a href="./src/resources/exchanges.ts">ExchangeCreateResponse</a></code>
- <code><a href="./src/resources/exchanges.ts">ExchangeRetrieveResponse</a></code>
- <code><a href="./src/resources/exchanges.ts">ExchangeListResponse</a></code>

Methods:

- <code title="post /exchanges">client.exchanges.<a href="./src/resources/exchanges.ts">create</a>({ ...params }) -> unknown</code>
- <code title="get /exchanges/{id}">client.exchanges.<a href="./src/resources/exchanges.ts">retrieve</a>(id) -> ExchangeRetrieveResponse</code>
- <code title="get /exchanges">client.exchanges.<a href="./src/resources/exchanges.ts">list</a>() -> ExchangeListResponse</code>
