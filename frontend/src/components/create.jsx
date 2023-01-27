import Accordion from "react-bootstrap/Accordion";
import FirstNavbar from './navbar';
import Footer from './footerCheck';
function AllCollapseExample() {
  return (
    <>
    <FirstNavbar/>
    <div className="contact delivery ">
      <h1 className="contact-h delivery-heading1">Delivery and payment</h1>
      <Accordion>
        <Accordion.Item eventKey="0" className="delivery-item">
          <Accordion.Header>Shipping company</Accordion.Header>
          <Accordion.Body>
            All packages are sent via Russian Postoffice from Tyumen (Russia).
            Track number will be sent to your e-mail.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Cost of delivery</Accordion.Header>
          <Accordion.Body>
            The cost of the delivery service is calculated by taking into
            account the following parameters:
            <ul>
              <li>
                Location of the sender and the recipient's location (every
                country has its own tariff zone)
              </li>
              <li>Weight of shipment</li>
              <li>
                Additional paid services (cash on delivery, insurance, customs
                services).
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Packaging</Accordion.Header>
          <Accordion.Body>
            For shipping I use special cardboard envelopes for items up to 30 cm
            and cardboard tubes for bigger sizes.
          </Accordion.Body>
        </Accordion.Item>{" "}
        <Accordion.Item eventKey="3">
          <Accordion.Header>Delivery Time</Accordion.Header>
          <Accordion.Body>
            The order processing time is 1-2 business days. Completing and
            sending of orders is carried out during working hours, on weekdays
            from Monday to Friday, with the exception being on holidays.
            <br />
            <span className="delivery-p">
              If your order was placed on a weekend or a holiday, or outside of
              working hours, it will be shipped on the next working day.
            </span>
            <br />
            <span className="delivery-p">
              Sending parcels by first class by Russian Postoffice is carried
              out twice a week during the opening hours of post offices.
            </span>
            <br />
            Shipping time may vary depending on your location and customs
            processing, so I can't guarantee that items will be received by a
            certain date - it's out of my control. The transit time will also be
            affected by any busy season (e.g. Christmas) or your local holidays.
          </Accordion.Body>
        </Accordion.Item>{" "}
        <Accordion.Item eventKey="4">
          <Accordion.Header>Order Tracking</Accordion.Header>
          <Accordion.Body>
            After the payment has been processed on my website, i'm 1-2 days
            preparing the order for the shipment. After your order is sent by
            Russian Post - you will receive an e-mail to your listed e-mail
            address with a tracking number.
            <br />
            You can track order here:
            <a
              href="https://www.pochta.ru/en/tracking"
              className="delivery-link"
            >
              {" "}
              https://www.pochta.ru/en/tracking
            </a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Payment methods</Accordion.Header>
          <Accordion.Body>
            Payment for goods on my website is available through the payment
            system Robokassa and PayPal. Card types allowed:
            <ul>
              <li className="delivery-p">
                Robokassa - Visa, MasterCard/ Maestro, MIR
              </li>
              <li>PayPal - Visa, MasterCard/ Maestro, American Express</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Order Cancellation</Accordion.Header>
          <Accordion.Body>
            If you have not received your order or wish to cancel it, contact me
            via email
            <a href="mailto:peach@humidpeach.com" className="delivery-link">
              {" "}
              peach@humidpeach.com
            </a>{" "}
            or call at +7 (996) 321-40-36 and explain your situation or problem
            to me.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>Payment Refund</Accordion.Header>
          <Accordion.Body>
            When the item is received and inspected by me, provided that all
            return requirements are met, I will issue you a refund. If the goods
            were paid for by credit card or another online payment method, the
            funds for the goods will be returned in the same way to the same
            account. Please note that the refund period may take up to 10
            business days from the date that the goods were received by me.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>Return and exchange of goods</Accordion.Header>
          <Accordion.Body>
            For all questions regarding the exchanging of goods, please contact
            by email at
            <a href="mailto:peach@humidpeach.com" className="delivery-link">
              {" "}
              peach@humidpeach.com.{" "}
            </a>
            <br />
            <span className="delivery-p">
              Return of goods of proper quality is possible:
            </span>
            <ul>
              <li>No later than 7 calendar days after it is received</li>
              <li>In original packaging</li>
              <li>In original condition</li>
            </ul>
            I strongly recommend checking the item upon receipt, especially
            before removing the original packaging.
            <br />
            <br />
            Refund policy:
            <br />
            <ul>
              <li>
                Once I receive your item and make sure it complies with the
                return policy, I will issue you a refund.
              </li>
              <li>
                If the goods were paid for on the website by credit card or
                other online payment methods, the funds for the goods will be
                returned in the same way to the same account.
              </li>
              <li>
                Please note that the receipt of funds may take up to 10 business
                days from the date it was received by me
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
    <Footer/>
    </>
  );
}

export default AllCollapseExample;
