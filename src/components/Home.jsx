import React from 'react';
import {AiFillGoogleCircle,AiFillFacebook,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai';


import vg from "../assets/2.webp";

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
      <main>
        <h1>MisterX</h1>
        <p>Solution to all your Problems</p>
      </main>
    </div>

    <div className='home2'>
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                We are one and only solutions to the tech problems that you are facing in your daily life style.
                Our only one goal that is to complete your goal with our this amazing website MisterX.
            </p>
        </div>
    </div>

    <div className="home3" id="about">
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At esse aperiam explicabo suscipit porro sunt cum, alias commodi impedit. Distinctio alias iure velit vitae, soluta rerum. Quod, quis magnam. Molestias cumque earum quos beatae non, dolore vitae aliquam dolorum iusto. Porro distinctio temporibus eius facere commodi nisi, nobis dolorum, saepe, voluptate eaque ullam voluptates! Voluptatibus esse provident modi aspernatur amet sint soluta et consequatur at, tenetur similique cumque autem officia? Itaque quia ipsam dicta, eaque doloribus, dolores accusamus totam sapiente unde necessitatibus, quos nisi facere quibusdam ab minus optio a libero hic repellat quisquam magnam? Iusto ipsum inventore sed ea quaerat exercitationem delectus voluptates eveniet, quam ducimus quis non deleniti, repudiandae possimus odit eaque alias cum recusandae perferendis, nostrum veritatis beatae nisi mollitia. Id facere suscipit eos quibusdam expedita dolores omnis non libero reprehenderit nemo quo modi inventore eius, sint voluptatum nulla alias eaque esse exercitationem voluptatibus aliquid saepe molestiae illo reiciendis. Blanditiis, fugiat numquam impedit aliquam doloribus exercitationem perspiciatis perferendis. Eveniet veritatis dicta exercitationem sunt architecto iusto a, ea accusantium fugit doloremque dolorum error tempore necessitatibus ad quasi dignissimos tenetur nemo facilis libero ipsam dolor earum corrupti, aperiam ut! Illum maxime esse aperiam deleniti commodi nobis qui adipisci voluptate distinctio similique molestiae earum, in fugit ex quis mollitia, laborum quisquam, unde consequuntur delectus aliquam minus officia. Iusto saepe eligendi quidem tempore, nulla quos odio numquam delectus ab reiciendis perferendis exercitationem! Nisi recusandae ullam velit, magnam laboriosam quae dolorum, incidunt consectetur odio repudiandae perferendis neque repellat? Cum quis ipsam vitae.</p>
        </div>
    </div>

    <div className="home4" id='brands'>
        <div className='pro'>
            <h1>Brands</h1>
            <article>
                <div style={{
                    animationDelay: '0.3s',
                }}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>

                <div style={{
                    animationDelay: '0.5s',
                }}>
                    <AiFillFacebook />
                    <p>FaceBook</p>
                </div>

                <div style={{
                    animationDelay: '0.7s',
                }}>
                    <AiFillYoutube />
                    <p>YouTube</p>
                </div>

                <div style={{
                    animationDelay: '0.9s',
                }}>
                    <AiFillInstagram />
                    <p>Instagramer</p>
                </div>

                <div style={{
                    animationDelay: '1.1s',
                }}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home
