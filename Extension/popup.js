const video = document.getElementById('webcam');
const startButton = document.getElementById('start');
const resultDiv = document.getElementById('result');

let model;

// Load the TensorFlow.js model
async function loadModel() {
  console.log('Loading model...');
  model = await tf.loadLayersModel('...'); // Replace with your model path
  console.log('Model loaded.');
}

// Access the webcam
async function setupWebcam() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
    video.onloadedmetadata = () => {
      video.play();
    };
  } catch (err) {
    console.error('Error accessing webcam:', err);
  }
}

// Process webcam frames for sign language detection
async function detectSignLanguage() {
  if (!model) {
    console.error('Model not loaded.');
    return;
  }

  // Capture a frame from the webcam
  const image = tf.browser.fromPixels(video);
  const resizedImage = tf.image.resizeBilinear(image, [224, 224]); // Resize for model input
  const normalizedImage = resizedImage.div(255.0); // Normalize pixel values
  const batchedImage = normalizedImage.expandDims(0); // Add batch dimension

  // Make a prediction
  const predictions = await model.predict(batchedImage);
  const predictedClass = predictions.argMax(1).dataSync()[0]; // Get the predicted class
  const confidence = predictions.max().dataSync()[0]; // Get the confidence score

  // Display the result
  resultDiv.textContent = `Predicted: ${predictedClass} (Confidence: ${confidence.toFixed(2)})`;

  // Clean up tensors to avoid memory leaks
  tf.dispose([image, resizedImage, normalizedImage, batchedImage, predictions]);

  // Continuously detect sign language
  requestAnimationFrame(detectSignLanguage);
}

// Start the process
startButton.addEventListener('click', async () => {
  await setupWebcam();
  await loadModel();
  detectSignLanguage();
});