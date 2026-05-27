import React from 'react';
import { FaRegThumbsUp, FaRegCommentDots } from 'react-icons/fa';
import '../CSS/BlogDetails.css';

const BlogDetails = () => {
  return (
    <div className="blogDetailsLayout">
      <div className="blogDetailsContainer">
        
        <div className="blogInlineImageWrapper">
          <img 
            src="" 
            alt="Smartwatch Display View" 
            className="blogInlineImage" 
          />
        </div>

        <div className="blogDetailsBody">
          <div className="blogSectionBlock">
            <h2 className="blogBlockHeading">Health Monitoring That Keeps You Aware</h2>
            <p>Smartwatches have become invaluable tools for tracking personal health.</p>
            <p>The <span className="highlightOrange">N-Watch 3</span> features clean heart rate monitors offering insights into daily lifestyle tracking throughout the day. Monitoring your heart can help you understand inner activity patterns and baseline overall success.</p>
            <p>This features makes it simpler to stay mindful of your health and maintain a more active lifestyle.</p>
          </div>

          <div className="blogSectionBlock">
            <h2 className="blogBlockHeading">A Display Designed for Everyday Use</h2>
            <p>The 1.83 inch screen display on the <span className="highlightOrange">N-Watch 3</span> offers a clear and responsive interface. Users can easily view notifications, check fitness data, and navigate apps with a simple tap or swipe. The device also includes a magnetic strap, providing modern comfort as you navigate.</p>
            <p>Indupitable grid details design ensures all-day comfort while maintaining a stylish appearance.</p>
          </div>

          <div className="blogSectionBlock">
            <h2 className="blogBlockHeading">Stay Prepared with Smart Everyday Features</h2>
            <p>Wearables offer features that extend beyond basic fitness functions.</p>
            <p>The built-in weather forecast system keeps you informed about changing weather conditions so you can plan your day better.</p>
            <p>From morning commutes to outdoor workouts, knowing what to expect helps you stay prepared.</p>
          </div>

          <div className="blogSectionBlock">
            <h2 className="blogBlockHeading">Built for Durability and Adventure</h2>
            <p>A smartwatch should keep up with your lifestyle.</p>
            <p>The <span className="highlightOrange">N-Watch 3</span> features IP68 waterproof protection, making it resistant to dust and water. This means tracking workouts safely without worrying about rain, handwashing, or unexpected rain matches performance.</p>
            <p>Durability ensures your smartwatch remains available whenever your day takes you.</p>
          </div>

          <div className="blogSectionBlock">
            <h2 className="blogBlockHeading">Powered by Intelligent Performance</h2>
            <p>At the core of the <span className="highlightOrange">N-Watch 3</span> is a fourth-generation processor delivering smooth performance across internal functionality.</p>
            <p>This advanced architecture ensures stable connectivity, efficient power usage, and fast system performance so your smartwatch checks tasks easily throughout the day.</p>
          </div>

          <div className="blogSectionBlock">
            <h2 className="blogBlockHeading">Why Smartwatches Are Becoming Everyday Essentials</h2>
            <p>Smartwatches are no longer just basic accessories.</p>
            <p>They have become tools that help people</p>
            <ul className="blogBulletList">
              <li>Monitor their health</li>
              <li>Manage daily schedules</li>
              <li>Track fitness progress</li>
              <li>Simplify everyday tasks</li>
            </ul>
            <p>For many people, a smartwatch is now an essential part of modern living.</p>
          </div>

          <div className="blogSectionBlock">
            <h2 className="blogBlockHeading">Experience the Future of Smartwatches</h2>
            <p>The New Age <span className="highlightOrange">N-Watch 3</span> combines health tracking, durability, and intelligent performance into a powerful wearable device.</p>
            <p>It's designed for anyone who wants technology that matches their lifestyle.</p>
            <p>Because today, a smartwatch should do more than tell time; it should help you stay ahead of your day.</p>
          </div>

          <div className="blogFooterSignature">
            <p>Stay Connected • Stay Active</p>
            <p>Discover smarter wearable technology with the <span className="highlightOrange">New Age N-Watch Series</span>, designed to help you monitor your health, stay connected, and simplify your day.</p>
            <p>Explore our range of smartwatches to find the matching options for your lifestyle, and <span className="highlightOrange">Follow us for more</span>.</p>
          </div>

          <div className="blogMetaFooter">
            <span className="metaFooterItem">
              <FaRegThumbsUp className="metaIcon" /> 
              <span className="metaLabelText">150 Likes</span>
            </span>
            <span className="metaFooterItem">
              <FaRegCommentDots className="metaIcon" /> 
              <span className="metaLabelText">05 Comments</span>
            </span>
          </div>

          <div className="commentFormSection">
            <h3 className="commentSectionTitle">Comment</h3>
            <textarea placeholder="Type here..." className="commentTextAreaField"></textarea>
            <button className="commentSubmitBtn">Comment</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogDetails;
