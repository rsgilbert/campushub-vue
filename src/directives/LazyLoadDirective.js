export default {
	inserted: function(el) {
		function loadImage() {
			const imageElement = Array.from(el.children).find(function(el) {
				return el.nodeName === "IMG"
			})
			if (imageElement) {
				imageElement.addEventListener("load", function() {
					setTimeout(function() {
						el.classList.add("loaded")
					}, 100)
				})
				imageElement.addEventListener("error", function() {
					console.err("Error loading image")
				})
				imageElement.src = imageElement.dataset.url
			}
		}
		function handleIntersect(entries, observer) {
			entries.forEach(function(entry) {
				if(entry.isIntersecting) {
					loadImage()
					observer.unobserve(el)
				}
			})
		}
		function createObserver() {
			const options = {
				root: null,
				threshold: "0.25",
			}
			const observer = new IntersectionObserver(handleIntersect, options)
			observer.observe(el)
		}
		if(window["IntersectionObserver"]) {
			createObserver()
		} else {
			loadImage()
		}
	}
}