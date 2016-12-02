window.addEventListener("load", onClickGetSrc, false);
function onClickGetSrc() {
    GetElements('vid1', 'vid2', 'vid3', 'vid4', 'video_title', 'video_desc');
}

function GetElements(el1, el2, el3, el4, el5, el6) {


    var src1 = "https://www.youtube.com/embed/mml9UjvuvO8";
    var src2 = "https://www.youtube.com/embed/BCNgmkm_Uqs";
    var src3 = "https://www.youtube.com/embed/fXwu_UV-uQU";
    var src4 = "https://www.youtube.com/embed/yYt-mJmdYK4";

    var vid1_t = "Rhetorical Reading Review (CA Dept of Education) ";
    var vid2_t = "Using Ratios to Solve Real-World Problems (CA Dept of Education)";
    var vid3_t = "Digital Hybrid Socratic Seminar (CA Dept of Education) ";
    var vid4_t = "Developing Defining Sentences (CA Dept of Education)";

    var vid1_de = "From the Formative Assessment in Action series, California educator Leisa Machado models formative practices as her grade\n\
 7 ELA class annotates an article, works collaboratively on posters, and uses text-on-text graffiti to provide feedback to peers.";
    var vid2_de = "From the Formative Assessment in Action series, California educator Travis Burke models formative practices as his grade\n\
 6 math students share their problem solving strategies with each other and articulate why their strategy is best.";
    var vid3_de = "From the Formative Assessment in Action series, California educator Matthew Cowan models formative practices \n\
as his grade 9 ELA class uses the Socratic method to debate the effects of texting and video games on student learning.";
    var vid4_de = "From the Formative Assessment in Action series, California educator Toni David models formative assessment as her grade \n\
5 class works collaboratively to create defining sentences in an effort to enhance a written explanation of why it rains.";

    var vid1 = document.getElementById(el1);
    var vid2 = document.getElementById(el2);
    var vid3 = document.getElementById(el3);
    var vid4 = document.getElementById(el4);

    var videoTitle = document.getElementById(el5);

    var videoDesc = document.getElementById(el6);


    if (vid1.onclick = function () {

        document.getElementById('video_u').src = src1;
        videoTitle.innerHTML = vid1_t;
        videoDesc.innerHTML = vid1_de;
    }) {

    }
    if (vid2.onclick = function () {
        document.getElementById('video_u').src = src2;
        videoTitle.innerHTML = vid2_t;
        videoDesc.innerHTML = vid2_de;
    }) {

    }
    if (vid3.onclick = function () {
        document.getElementById('video_u').src = src3;
        videoTitle.innerHTML = vid3_t;
        videoDesc.innerHTML = vid3_de;
    }) {

    }
    if (vid4.onclick = function () {
        document.getElementById('video_u').src = src4;
        videoTitle.innerHTML = vid4_t;
        videoDesc.innerHTML = vid4_de;
    }) {

    }
}

