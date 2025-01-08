const scriptContent = `
function myGradientBtnsInit() {
  let hoverEffect;
  const selector = "[gradient-btn]";
  document.querySelectorAll(selector).forEach(gradientify);

  function gradientify(btn) {
    hoverEffect = true;
    styleMyBtn(btn);
  }

  function styleMyBtn(btn) {
    let customClasses = storeAndRemoveCustomClasses(btn);

    const varient = btn.getAttribute("varient");
    const effect = btn.getAttribute("hover-effect");
    effect === "false" && (hoverEffect = false);

    const styles = {
      hoverEffects: "hover:bg-gradient-to-l",
      gradients: "bg-gradient-to-r",
      btnStyle: "text-lg font-bold py-2 px-4 rounded-md",
      default: "from-purple-500 to-pink-500 text-white",
      bluish: "from-sky-500 to-indigo-500 text-white",
      "bluish-2": "from-cyan-500 to-blue-500 text-white",
      orangy: "from-orange-500 to-yellow-500 text-white",
      redish: "from-red-500 to-pink-500 text-white",
      "redish-2": "from-red-500 to-purple-500 text-white",
    };
    const willApply = [
      ...styles.btnStyle.split(" "),
      ...styles.gradients.split(" "),
      ...(hoverEffect ? styles.hoverEffects.split(" ") : ""),
      ...(varient ? styles[varient].split(" ") : ""),
      ...customClasses,
    ];
    
    let clsObj = {};
    const finalClasses = [];

    willApply.forEach((cls) => {
      let [k, ...rest] = cls.split("-");
      clsObj[k] = rest.join("-");
    });
    for (const [k, o] of Object.entries(clsObj)) {
      finalClasses.push(\`\${k}-\${o}\`);
    }

    btn.classList.add(...finalClasses);
  }

  function storeAndRemoveCustomClasses(btn) {
    const btnClasses = Array.from(btn.classList);
    btn.classList = [];
    return btnClasses;
  }
}

document.addEventListener("DOMContentLoaded", myGradientBtnsInit);
`;
// Create a new <script> element
const script = document.createElement("script");
script.type = "text/javascript";
script.textContent = scriptContent;
document.head.insertAdjacentElement("beforeend", script);
