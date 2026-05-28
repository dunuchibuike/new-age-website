import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaRegThumbsUp, FaRegCommentDots } from 'react-icons/fa';
import '../CSS/BlogMain.css';

const BlogMain = () => {
  return (
    <div className="blogMainLayout">
      <div className="blogMainContent">
        <div className="blogHeroImageWrapper">
          <img 
            src="" 
            alt="Smartwatch view" 
            className="blogHeroImage" 
          />
        </div>

        <h1 className="blogPostTitle">Smartwatches That Track More Than Time</h1>

        <div className="blogParagraphGroup">
          <p>Watches used to have one simple purpose: telling time.</p>
          <p>Today, they do much more.</p>
          <p>Modern smartwatches combine communication, health tracking, and productivity features into one compact device. They help users stay connected, monitor their wellness, and manage their daily routines more efficiently.</p>
          <p>Devices like the <span className="highlightOrange">New Age N-Watch 3</span> represent this new generation of wearable technology designed for everyday life.</p>
        </div>

        <div className="blogArticleSection">
          <h2 className="blogSectionHeading">Stay Connected Anywhere with Smart Technology</h2>
          <p>One of the biggest advantages of a smartwatch is staying connected without constantly checking your phone.</p>
          <p>The <span className="highlightOrange">N-Watch 3</span> comes with Bluetooth 5.3 stable calling, allowing you to answer calls directly from your wrist. Whether you're commuting, exercising, or working, you can stay connected without interruption.</p>
          <p>The smartwatch also features an AI voice assistant, enabling you to perform tasks using simple voice commands. From checking information to managing reminders, voice assistance adds a new level of convenience.</p>
        </div>
      </div>

      <aside className="blogSidebar">
        <div className="sidebarSearchBox">
          <input type="text" placeholder="Type here..." className="sidebarSearchInput" />
          <button className="sidebarSearchBtn"><FiSearch /></button>
        </div>

        <div className="recentPostsBlock">
          <h3 className="sidebarWidgetTitle">Recent Posts</h3>
          <div className="recentPostsList">
            
            <div className="recentPostCard">
              <img 
                src="" 
                alt="Recent post item" 
                className="recentPostThumb" 
              />
              <div className="recentPostMeta">
                <h4 className="recentPostTitleText">Smartwatches That Track More Than Time</h4>
                <span className="recentPostDate">Mar 30, 2026</span>
                <div className="recentPostIcons">
                  <span>
                    <FaRegThumbsUp className="metaIcon" /> 
                    <span className="metaLabelText">150 Likes</span>
                  </span>
                  <span>
                    <FaRegCommentDots className="metaIcon" /> 
                    <span className="metaLabelText">120 Comments</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="recentPostCard">
              <img 
                src="" 
                alt="Recent post item" 
                className="recentPostThumb" 
              />
              <div className="recentPostMeta">
                <h4 className="recentPostTitleText">Smartwatches That Track More Than Time</h4>
                <span className="recentPostDate">Mar 30, 2026</span>
                <div className="recentPostIcons">
                  <span>
                    <FaRegThumbsUp className="metaIcon" /> 
                    <span className="metaLabelText">150 Likes</span>
                  </span>
                  <span>
                    <FaRegCommentDots className="metaIcon" /> 
                    <span className="metaLabelText">120 Comments</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="recentPostCard">
              <img 
                src="" 
                alt="Recent post item" 
                className="recentPostThumb" 
              />
              <div className="recentPostMeta">
                <h4 className="recentPostTitleText">Smartwatches That Track More Than Time</h4>
                <span className="recentPostDate">Mar 30, 2026</span>
                <div className="recentPostIcons">
                  <span>
                    <FaRegThumbsUp className="metaIcon" /> 
                    <span className="metaLabelText">150 Likes</span>
                  </span>
                  <span>
                    <FaRegCommentDots className="metaIcon" /> 
                    <span className="metaLabelText">120 Comments</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="recentPostCard">
              <img 
                src="https://unsplash.com" 
                alt="Recent post item" 
                className="recentPostThumb" 
              />
              <div className="recentPostMeta">
                <h4 className="recentPostTitleText">Smartwatches That Track More Than Time</h4>
                <span className="recentPostDate">Mar 30, 2026</span>
                <div className="recentPostIcons">
                  <span>
                    <FaRegThumbsUp className="metaIcon" /> 
                    <span className="metaLabelText">150 Likes</span>
                  </span>
                  <span>
                    <FaRegCommentDots className="metaIcon" /> 
                    <span className="metaLabelText">120 Comments</span>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </aside>
    </div>
  );
};

export default BlogMain;
