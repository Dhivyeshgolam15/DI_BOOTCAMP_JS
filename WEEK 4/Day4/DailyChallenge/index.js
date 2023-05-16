class Video {
    constructor(title, uploader, time) {
      this.title = title;
      this.uploader = uploader;
      this.time = time;
    }
  
    watch() {
      console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
  }
  
  // Instantiate a new Video instance and call the watch() method
  const video1 = new Video("Video 1", "Uploader 1", 120);
  video1.watch();
  
  // Instantiate a second Video instance with different values
  const video2 = new Video("Video 2", "Uploader 2", 180);
  video2.watch();
  
  // Bonus: Use an array to store data for five Video instances
  const videosData = [
    ["Video 1", "Uploader 1", 120],
    ["Video 2", "Uploader 2", 180],
    ["Video 3", "Uploader 3", 240],
    ["Video 4", "Uploader 4", 300],
    ["Video 5", "Uploader 5", 360]
  ];
  
  const videos = [];
  
  // Bonus: Loop through the array to instantiate those instances
  for (const videoData of videosData) {
    const [title, uploader, time] = videoData;
    const video = new Video(title, uploader, time);
    videos.push(video);
  }