import React from "react";
import blogImage from "@/assets/Blog-News-Section/blog_hanzas_5.jpg";


const BlogNewsDetailHanzaS2: React.FC = () => (
  <article className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12 my-12">
    {/* Header */}
    <img
      src={blogImage}
      alt="HanzaS: A Story Stitched with Strength"
      className="w-full h-64 object-cover rounded-2xl mb-8"
      draggable={false}
    />
    <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-800 mb-4">
      HanzaS: A Story Stitched with Strength
    </h1>
    <div className="text-yellow-500 uppercase text-sm font-semibold mb-4">
      Women Empowerment
    </div>
    <section className="text-lg text-gray-700 font-serif space-y-6">
      <p>
        In 2011, in a quiet village in Rajasthan, a mother and daughter were doing what countless others were trying to do—survive.<br/>
        They had no capital. No big plans. Just courage, a deep love for their roots, and a craft passed down through generations.<br/>
        With poverty pressing on one side, and societal judgment on the other, they chose to start anyway.
      </p>
      <hr />
      <h2 className="font-bold text-xl text-yellow-700 mt-4 mb-2">They Began When the World Said, “Don’t.”</h2>
      <p>
        Back then, the world rarely offered space to women from small villages. Especially not in business.<br/>
        But this mother and daughter duo didn’t wait for permission. They gathered their handcrafted pieces—full of colour, culture, and resilience—and began trading.<br/>
        It wasn’t easy. But it was enough to begin. And that beginning sparked something powerful.
      </p>
      <hr />
      <h2 className="font-bold text-xl text-yellow-700 mt-4 mb-2">From One Step to a Movement</h2>
      <p>
        As their journey grew, so did the interest of other women—women who had always held skill in their fingers but rarely had a platform.<br/>
        Together, they began building something new. Something bold.<br/>
        A collective of artisans, rooted in heritage but looking toward the future.<br/>
        Today, HanzaS works with over 200 women artisans and 100 local vendors.<br/>
        Our story has travelled from Himachal Pradesh to homes across India and the world.<br/>
        But we haven’t forgotten where it started—or why it matters.
      </p>
      <hr />
      <h2 className="font-bold text-xl text-yellow-700 mt-4 mb-2">Not Just Products. Stories.</h2>
      <ul className="list-disc pl-6 mb-2">
        <li>A legacy of craft</li>
        <li>A reclaiming of dignity</li>
        <li>A story of a woman saying “yes” to herself</li>
      </ul>
      <p>
        When you wear HanzaS, you’re not just wearing a garment.<br/>
        You’re wearing strength, softness, history, and hope.
      </p>
      <hr />
      <h2 className="font-bold text-xl text-yellow-700 mt-4 mb-2">You’re Not Just Buying. You’re Belonging.</h2>
      <p>
        When you support HanzaS, you don’t just shop—you join a movement.<br/>
        A movement that says women can lead, create, earn, and thrive.<br/>
        You help rewrite futures—one stitch at a time.
      </p>
      <hr />
      <h2 className="font-bold text-xl text-yellow-700 mt-4 mb-2">Labour Day Reflection</h2>
      <p>
        Labour Day is not just a date on the calendar—it’s a reminder of the courage, strength, and silent resilience of those who build, create, and carry the world forward.<br/>
        The word labour is often misunderstood. It’s not something to look down on—it’s something to honour. Labour means effort, artistry, and dignity. It means hands that don’t give up, even when no one is watching.<br/>
        At HanzaS, our story is woven by labour. By women artisans who rise each day to turn thread into dreams.<br/>
        By creators whose work rarely makes headlines—but always makes a difference.<br/>
        We’re here because of them. And for them.<br/>
        Today, we pause to thank every soul behind our craft.<br/>
        Because behind every HanzaS piece is a heartbeat, a hand, and a hope. <span role="img" aria-label="heart">💛</span>
      </p>
    </section>
  </article>
);

export default BlogNewsDetailHanzaS2;
