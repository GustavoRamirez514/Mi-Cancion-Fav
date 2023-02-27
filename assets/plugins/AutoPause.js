class AutoPause {
  constructor() {
    this.threshold = 0.50;
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleVisibilityChanges = this.handleVisibilityChanges.bind(this);
  
  }
  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });
    observer.observe(this.player.media);

    document.addEventListener("visibilitychange", this.handleVisibilityChanges)

  }
  handleIntersection(entries) {
    const entry = entries[0];

    const isVisible = entry.intersectionRatio >= this.threshold;

    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  handleVisibilityChanges(){
    const isVisible = document.visibilityState==="visible"
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

export default AutoPause;
