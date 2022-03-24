import { FunctionComponent } from "react";
import { Callout, Tag } from "@blueprintjs/core";
import { Link } from "react-router-dom";

import { ROUTES_MAP } from "../../utils/constants";

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
      <section className="home-wrapper">
        <section className="margin-bottom-18">
          <h1>Welcome 🤗</h1>
          <div className="font-large">
            <p>
              <strong className="highlight">E-Mail Dispatcher</strong> is a web application you can use to send dynamical and customizable emails!
            </p>
            <p>
              Our intention is to make your life easier when it comes to send multiple and repetitive emails
            </p>
          </div>
        </section>
        <section className="margin-bottom-18">
          <h2>Check out our features 💪</h2>
          <div className="features">
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
        <section className="margin-bottom-18">
          <h2>How to use it? 🤔</h2>
          <Callout icon="info-sign" className="font-large">
            First, you need to define variables, in the <Link to={ROUTES_MAP.VARS}>Variables</Link> page. Each list of variables will correspond to a email. Then, you need to write the template, in the <Link to={ROUTES_MAP.TEMPLATE}>Template</Link> page. Template is the actual message that will be sent in the emails. Finally, after setting both variables and template, you can see the result in the <Link to={ROUTES_MAP.OUTPUT}>Output</Link> page. There, you will also find instructions to send the emails.
          </Callout>
        </section>
        <section>
          <h2>Motivation 💡</h2>
          <div className="font-large">
            <p>
              In addition to the instructions in the <i className="highlight">How to use it?</i> section, it is important to understand the main purpose of the <strong className="highlight">E-Mail Dispatcher</strong> app, check the following explanation:
            </p>
            <ol>
              <li>
                The idea is that you can set a variable like this <code className="highlight">name ={">"} John Doe</code>
              </li>
              <li>
                Use the variable in a template like this <code className="highlight">Hello {"${name}"}!</code>
              </li>
              <li>
                See the output result looking something like this <code className="highlight">Hello John Doe!</code>
              </li>
              <li>
                Review, edit and send the emails!
              </li>
            </ol>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Home;
