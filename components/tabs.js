import { useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Early period
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Intermediate period
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Hard Edge Period
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Early period</h2>
          <hr />
          <SRLWrapper>
                        <div class="gallery_group">
                            <div class="arena_img_box">
                                <img src="/img/Conversation.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/Farmer.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/Hauran-Druze-Women.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/Beiteddine-Palace.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/Douaihy3.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/Still-Life.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/Lebanese-Village.jpg"/>
                            </div>

                            <div class="arena_img_box">
                                <img src="/img/1.jpg"/>
                            </div>
                        </div>
                    </SRLWrapper>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Intermediate period</h2>
          <hr />
          <SRLWrapper>
                        <div class="gallery_group">
                            
                            <div class="arena_img_box">
                                <img src="/img/2.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/3.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/4.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/5.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/6.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/7.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/8.jpg"/>
                            </div>

                           
                            <div class="arena_img_box">
                                <img src="/img/9.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/10.jpg"/>
                            </div>
                           
                            
                        </div>
                    </SRLWrapper>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Hard Edge Period</h2>
          <hr />
          <SRLWrapper>
                        <div class="gallery_group">
                            <div class="arena_img_box">
                                <img src="/img/11.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/12.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/13.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/Ehden-Mar-Gerges.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/arcades.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/Arcades2.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/Early-Mar-Elias-Monastry.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/Carthage.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/Rechmaya-Village.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/Sulaymania-Mosque.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/Water-Mill-in-Akkar-Region.jpg"/>
                            </div>
                            <div class="arena_img_box">
                                <img src="/img/Sea-Mountains.jpg"/>
                            </div>
                            
                        </div>
                    </SRLWrapper>
        </div>
      </div>
    </div>
  );
}

export default Tabs;