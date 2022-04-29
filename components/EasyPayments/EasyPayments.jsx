import {
  EasyPaymentsContainer,
  PaymentsHeader,
  PaymentsHr,
  PaymentsTag,
} from './EasyPaymentsStyles'

const EasyPayments = () => {
  return (
    <EasyPaymentsContainer>
      <PaymentsHeader>
        <h4>Accepting Payments Made Easy, Simple & FREE!</h4>
      </PaymentsHeader>
      <PaymentsHr />

      <PaymentsTag>
        The logos are the property of respective trademark owners. All the above
        apps support BHIM-UPI
      </PaymentsTag>
    </EasyPaymentsContainer>
  )
}

export default EasyPayments
