document.addEventListener("DOMContentLoaded", () => {
  const predictBtn = document.getElementById("predict-btn");
  predictBtn.addEventListener("click", onPredictClick);
});

async function onPredictClick(e) {
  const btn = e.currentTarget;
  const form = document.getElementById("prediction-form");
  const inputs = form.querySelectorAll("input, select");
  let data = {};

  // Collect inputs
  inputs.forEach(i => {
    // ignore elements without id (if any)
    if (!i.id) return;
    data[i.id] = i.value;
  });

  // Validate: ensure no empty (simple front-end check)
  for (let key in data) {
    if (data[key] === "" || data[key] === null || typeof data[key] === "undefined") {
      window.alert("⚠️ Please fill in all required fields before predicting.");
      return;
    }
  }

  // UI: loading
  btn.disabled = true;
  btn.classList.add("loading");
  btn.querySelector(".btn-text").textContent = "Analyzing...";
  // (the spinner element becomes visible via CSS .loading)

  try {
    const res = await fetch("/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!res.ok) {
      throw new Error(`Server returned ${res.status}`);
    }

    const result = await res.json();
    const price = Number(result.predicted_price ?? result.price ?? 0);

    if (Number.isNaN(price)) {
      throw new Error("Invalid price from server");
    }

    animatePrice(price);
    const resultSection = document.querySelector(".result-card");
    if (resultSection) {
      resultSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  } catch (err) {
    console.error(err);
    window.alert("❌ Error: Could not connect to backend or invalid response.");
  } finally {
    // restore button
    const btnText = btn.querySelector(".btn-text");
    btnText.textContent = "Predict Price";
    btn.classList.remove("loading");
    btn.disabled = false;
  }
}

function animatePrice(finalPrice) {
  const priceElement = document.getElementById("price-display");
  if (!priceElement) return;
  const duration = 1100;
  const fps = 30;
  const steps = Math.max(10, Math.round(duration / (1000 / fps)));
  let current = 0;
  const increment = finalPrice / steps;
  let step = 0;

  const iv = setInterval(() => {
    step++;
    current += increment;
    if (step >= steps) {
      current = finalPrice;
      clearInterval(iv);
    }
    // format for display (locale aware)
    priceElement.textContent = current ? current.toLocaleString("en-IN", { maximumFractionDigits: 2 }) : "—";
  }, Math.round(1000 / fps));
}
