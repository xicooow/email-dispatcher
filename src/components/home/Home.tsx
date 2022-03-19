import { Tag } from "@blueprintjs/core";
import { FunctionComponent } from "react";

const features = [
  "Set/use variables within emails' content",
  "Create a reusable template",
  "Write your default signature",
  "Bulk action for sending all or individual emails",
  "Separation of sender and receiver"
];

const Home: FunctionComponent = () => {
  return (
    <section className="home-container">
      <section>
        <h1>Welcome &#128578;</h1>
        <div className="disclaimer">
          <p>
            <strong className="highlight">E-Mail Dispatcher</strong> is a web application you can use to send dynamical and customizable emails!
          </p>
        </div>
      </section>
      <section>
        <h2>Check out our features &#128170;</h2>
        <div className="features-list">
          {
            features.map((feature, index) => {
              return (
                <Tag
                  key={index}
                  large
                  minimal
                  round
                  rightIcon="tick"
                  className="feature"
                >
                  {feature}
                </Tag>
              );
            })
          }
        </div>
      </section>
    </section>
  );
};

export default Home;
