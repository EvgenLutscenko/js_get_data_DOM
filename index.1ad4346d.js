var t=document.querySelectorAll(".population"),e=0,o=0;t.forEach(function(t){var n=t.textContent.replace(/,/g,"");!isNaN(Number(n))&&""!==n.trim()&&(e+=Number(n),o++)}),document.querySelector(".total-population").textContent=e.toLocaleString("en-US");var n=e/o;document.querySelector(".average-population").textContent=n.toLocaleString("en-US");
//# sourceMappingURL=index.1ad4346d.js.map
