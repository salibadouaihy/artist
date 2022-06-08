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
                        <img src="/img/new/early/20754113_1_x.jpg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img/new/early/Al Hamra - Grenada 33X28.jpg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img/new/early/Beiteddine Palace.jpg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img/new/early/Conversation.jpg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img//new/early/Deir Kalaa, Beit Merry.jpg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img//new/early/Douaihy 36X51.jpg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img//new/early/Early Mar Elias Monastry.jpg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img//new/early/Ehden - Mar Gerges 30X40.jpg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img//new/early/Ehden - Mar Gerges.jpg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img//new/early/Hauran Druze Women.jpg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img//new/early/Jounieh Bay.jpg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img//new/early/Lebanese House in Ehden.jpg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img//new/early/Rechmaya Village.jpg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img//new/early/S Douaihy, Oil on Canvas, 60x80cm B.jpg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img//new/early/S Douaihy, Oil on Canvas, 60x80cm.jpg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img/new/early/SD.jpg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img/new/early/Sulaymania Mosque 1948 49X39.jpg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img/new/early/View of Mount Hermon.jpg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img/new/early/Water Mill in Akkar Region.jpg"/>
                    </div>
                    
                </div>
            </SRLWrapper>
        </div>

        <div className={toggleState === 2 ? "content  active-content" : "content"}>
            <h2>Intermediate period</h2>
            <hr />
            <SRLWrapper>
                <div class="gallery_group">
                    <div class="arena_img_box">
                        <img src="/img/new/Intermediate/Douaihy 71cmX106.jpg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img/new/Intermediate/Grotto.jpg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img/new/Intermediate/hp03.jpg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img/new/Intermediate/Lebanese Village 1950 40X61.jpg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img/new/Intermediate/Monastery.jpg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img/new/Intermediate/Sea _ Mountains 69X43.jpg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img/new/Intermediate/Still Life 30X40.jpg"/>
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
                        <img src="/img/new/hardEdge/4.jpg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img/new/hardEdge/Carthage - 1965.jpg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img/new/hardEdge/Douaihy 111x92cm.jpg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img/new/hardEdge/Green.jpg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img/new/hardEdge/No Title 165X127.jpg"/>
                    </div>
                    <div class="arena_img_box">
                        <img src="/img/new/hardEdge/Purple.jpg"/>
                    </div>
                </div>
            </SRLWrapper>
        </div>
      </div>
    </div>
  );
}

export default Tabs;