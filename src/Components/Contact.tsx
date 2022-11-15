import React, { useRef, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import emailjs from '@emailjs/browser';

const Contact: React.FC<{ data: MainData }> = ({ data }) => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState(false);
  if (!data) return null;

  const name = data.name;
  const street = data.address.street;
  const city = data.address.city;
  const state = data.address.state;
  const zip = data.address.zip;
  const phone = data.phone;
  const message = data.contactmessage;

  const sendEmail = async (e: any) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    setError(undefined);
    setLoading(true);
    setSuccess(false);
    try {
      await emailjs.sendForm(
        'service_4n1jobh',
        'template_d05if5q',
        form.current as unknown as string,
        'y35mEXPzNRztLCQui'
      );
      setSuccess(true);
    } catch (error) {
      let message = 'Unknown Error';
      if (error instanceof Error) message = error.message;
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <Fade bottom duration={1000}>
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>
      </Fade>

      <div className="row">
        <Slide left duration={1000}>
          <div className="eight columns">
            {!success && (
              <form ref={form} onSubmit={sendEmail}>
                <fieldset>
                  {!loading && (
                    <>
                      <div>
                        <label htmlFor="contactName">
                          Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          defaultValue=""
                          size={35}
                          id="contactName"
                          name="user_name"
                        />
                      </div>

                      <div>
                        <label htmlFor="contactEmail">
                          Email <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          defaultValue=""
                          size={35}
                          id="contactEmail"
                          name="user_email"
                        />
                      </div>

                      <div>
                        <label htmlFor="contactSubject">Subject</label>
                        <input
                          type="text"
                          defaultValue=""
                          size={35}
                          id="contactSubject"
                          name="contactSubject"
                        />
                      </div>

                      <div>
                        <label htmlFor="contactMessage">
                          Message <span className="required">*</span>
                        </label>
                        <textarea
                          cols={50}
                          rows={15}
                          id="contactMessage"
                          name="message"
                        ></textarea>
                      </div>
                    </>
                  )}
                  <div>
                    {!loading && <button className="submit">Submit</button>}
                    {loading && (
                      <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                      </span>
                    )}
                  </div>
                </fieldset>
              </form>
            )}

            {error && <div id="message-warning"> Error boy</div>}
            {success && (
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            )}
          </div>
        </Slide>

        <Slide right duration={1000}>
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {name}
                <br />
                {street} <br />
                {city}, {state} {zip}
                <br />
                <span>{phone}</span>
                <br />
                <span>
                  <a href="mailto:doublep.rafael@gmail.com">
                    doublep.rafael@gmail.com
                  </a>
                </span>
              </p>
            </div>

            {/* TODO: Integration with Twitter */}
            {/* <div className="widget widget_tweets">
              <h4 className="widget-title">Latest Tweets</h4>
              <ul id="twitter">
                <li>
                  <span>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum
                    <a href="./">http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b>
                    <a href="./">2 Days Ago</a>
                  </b>
                </li>
                <li>
                  <span>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi
                    <a href="./">http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b>
                    <a href="./">3 Days Ago</a>
                  </b>
                </li>
              </ul>
            </div> */}
          </aside>
        </Slide>
      </div>
    </section>
  );
};

export default Contact;
