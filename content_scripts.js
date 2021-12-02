window.onload=()=>{
    console.log("YouTube_AdSkip is working");
    setInterval(()=>{
        if (document.querySelector(".ytp-ad-skip-button") != null) {
        document.querySelector(".ytp-ad-skip-button").click();
        console.log("The adsense is skipped by YouTube_AdSkip.");
        }
        if (document.querySelector(".ytp-ad-overlay-close-button") != null) {
            document.querySelector(".ytp-ad-overlay-close-button").click();
            console.log("The adsense is removed by YouTube_AdSkip.");
        }
    }, 1000);    
};