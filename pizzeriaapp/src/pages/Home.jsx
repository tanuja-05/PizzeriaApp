import Footer from "../components/Footer";
import Header from "../components/Hearder";

export default function HomePage() {
  return (
    <>
      <Header />
      <div>
        <h1 className="text-center">Our Story</h1>
        <p>
          We believe in good. We launched Fresh Pan Pizza Best Excuse Awards on
          our Facebook fan page. Fans were given situations where they had to
          come up with wacky and fun excuses. The person with the best excuse
          won the Best Excuse Badge and won Pizzeria’s vouchers. Their
          enthusiastic response proved that Pizzeria’s Fresh Pan Pizza is the
          Tastiest Pan Pizza Ever!
          <br /> <br />
          Ever since we launched the Tastiest Pan Pizza, ever, people have not
          been able to resist the softest, cheesiest, crunchiest, outsmart
          Domino’s Fresh Pan Pizza. They have been leaving the stage in the
          middle of a performance and even leaving excuses to be disqualified in
          football matches to get their hands on Pizzeria’s Fresh Pan Pizza.
          <br /> <br />
          We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan
          page. Fans were given situations where they had to come up with wacky
          and fun excuses. The person with the best excuse won the Best Excuse
          Badge and won Domino’s vouchers. Their enthusiastic response proved
          that Pizzeria’s Fresh Pan Pizza is the Tastiest Pan Pizza Ever.
        </p>
      </div>
      <div className="d-flex justify-content-between">
        <div className="p-2">
          <img
            src="https://images.unsplash.com/photo-1559183533-ee5f4826d3db?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emElMjBpbmdyZWRpZW50c3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Ingredients-img"
          />
        </div>
        <div className="bg-light m-3 bg-shadow p-5">
          <h2>Ingredients</h2>
          <p className="mt-4">
            We’re ruthless about goodness. We have no qualms about teaming up a
            day-old lettuce leaf straight from the farm, or steaming a baby
            (carrot). Cut. Chop. Chop. Steam. Stir. Stir. While they’re still
            young and fresh – that’s our motto. It makes the kitchen a better
            place.
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <div className="bg-light m-3 bg-shadow p-5">
          <h2>Our Chefs</h2>
          <p className="mt-4">
            They make sauces sing and salads dance. They create magic with
            skill, knowledge, passion, and stirring spoons (among other things).
            They make goodness so good, it doesn’t know what to do with itself.
            We do though. We send it to you.
          </p>
        </div>
        <div className="p-2">
          <img
            src="https://plus.unsplash.com/premium_photo-1661288474987-1e90159ff2ca?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dttps://images.unsplash.com/photo-1641505396636-bea08f5412d4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNoZWYlMjBtYWtpbmclMjBwaXp6YXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Ingredients-img"
          />
        </div>
      </div>

      <div className="d-flex ">
        <div className="p-2">
         <img src="https://plus.unsplash.com/premium_photo-1726776092398-98a1620d877e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emElMjBkZWxpdmVyeXxlbnwwfHwwfHx8MA%3D%3D" alt="Delivery-image" />
        </div>
        <div className="bg-light m-3 bg-shadow p-5 col-8">
          <h2>45 min delivery</h2>
        </div>
      </div>

      <Footer/>
    </>
  );
}
