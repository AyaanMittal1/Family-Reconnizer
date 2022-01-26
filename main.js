Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 Webcam.attach( '#cam' );
 function take_image(){
 Webcam.snap( function(data_uri) {
    // display results in page
    document.getElementById('img').innerHTML = 
     '<img id="image2" src="'+data_uri+'"/>';
} );}
console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/fAQwFi0sK/model.json",is_model_loaded);
function is_model_loaded(){
    console.log("model loaded");
}