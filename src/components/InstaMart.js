import React, { useState } from "react";

const Section = ({ name, description, isVisible, setIsVisible }) => {
  //   const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border border-slate-600 p-2 m-2">
      <h2 className="font-bold">{name}</h2>
      <button
        className={
          isVisible
            ? "text-red-800 font-bold"
            : "text-green-800 font-bold underline"
        }
        onClick={setIsVisible}
      >
        {isVisible ? "Hide..." : "show..."}
      </button>
      {isVisible && <h3>{description}</h3>}
    </div>
  );
};

const InstaMart = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <>
      <h1 className="font-bold text-3xl m-2 p-2 text-green-900">InstaMart</h1>
      <Section
        isVisible={visibleSection === "about"}
        name={"about Instamart"}
        description={`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
         totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
         sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
         consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
          ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt 
          ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
          vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`}
        // setIsVisible={() => setVisibleSection("about")}
        setIsVisible={() =>
          setVisibleSection(pre => pre !== "about" && "about")
        }
      />
      <Section
        isVisible={visibleSection === "product"}
        name={"product Instamart"}
        description={`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
           totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
           sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
           consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt 
            ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
            vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`}
        // setIsVisible={() => setVisibleSection("product")}
        // setIsVisible={() => setVisibleSection("product")}
        setIsVisible={() =>
          setVisibleSection(pre => pre !== "product" && "product")
        }
      />
      <Section
        isVisible={visibleSection === "carrer"}
        name={"carrer Instamart"}
        description={`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
         totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
         sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
         consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
          ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt 
          ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
          vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`}
        // setIsVisible={() => setVisibleSection("carrer")}
        setIsVisible={() =>
          setVisibleSection(pre => pre !== "carrer" && "carrer")
        }
      />
    </>
  );
};

export default InstaMart;
