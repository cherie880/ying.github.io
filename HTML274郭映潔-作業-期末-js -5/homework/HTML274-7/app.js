$(function () {
    //記住現在場景
    var currentScene = 1;

    //把按鈕找出來 存起來
    var $yesButton = $("#yesButton");
    var $noButton = $("#noButton");
    //把場景圖找出來 存起來
    var $scene = $("#scene");

    //把場景title找出來 存起來
    var $title = $("#title");

    //繪製現在頁面
    renderScreen(currentScene);




    //按下按鈕 要下決定
    function makeDecision(decision) {
        //根據現在的場景編號 決定下一張場景要做什麼
        if (currentScene === 1) {
            currentScene = 2;
        } else if (currentScene === 2) {
            currentScene = decision === 1 ? 10 : 3;
        } else if (currentScene === 3) {
            currentScene = decision === 1 ? 4 : 5;
        } else if (currentScene === 4) {
            currentScene = 1;
        } else if (currentScene === 5) {
            currentScene = decision === 1 ? 6 : 7;
        } else if (currentScene === 6) {
            currentScene = 1;
        } else if (currentScene === 7) {
            currentScene = decision === 1 ? 9 : 8;
        } else if (currentScene === 8) {
            currentScene = 1;
        } else if (currentScene === 9) {
            currentScene = 1;
        } else if (currentScene === 10) {
            currentScene = decision === 1 ? 4 : 11;
        } else if (currentScene === 11) {
            currentScene = 1;
        }
        //重新繪製網頁
        renderScreen(currentScene);

    }

    //繪製網頁
    function renderScreen(scene) {
        //產生場景圖片網址
        var url = "img/" + scene + ".jpg";
        //用JQuery幫我換src的url
        //屬性明稱為src
        $scene.attr("src", url);


        //設定場景Title
        var title = "";
        switch (scene) {
            case 1:
                title = "按下按鍵來示範";
                break;
            case 2:
                title = "你想成為哪種大學生";
                break;
            case 3:
                title = "到了教室，發現系花隔壁座位空著";
                break;
            case 4:
                title = "你被二一囉";
                break;
            case 5:
                title = "教授出錯了..該就糾正他嗎";
                break;
            case 6:
                title = "蝦教授的學分 Bye Bye~";
                break;
            case 7:
                title = "明天早八，該去夜唱嗎?";
                break;
            case 8:
                title = "你成功了!!";
                break;
            case 9:
                title = "贏了友情，輸了成績";
                break;
            case 10:
                title = "你想和哪位交往";
                break;
            case 11:
                title = "你成功了!!";
                break;
        }

        //透過jQuery把title文字設定進去
        $title.text(title);
        //設定按鈕的情況
        switch (scene) {
            case 1:
                $yesButton.text("由我來示範");
                $noButton.hide();
                break; //做完事情跳出
            case 2:
                $yesButton.text("把妹高手");
                $noButton.text("認真好學生");
                $yesButton.show();
                $noButton.show();
                break; //做完事情跳出
            case 3:
                $yesButton.text("人生機會怎能放過");
                $noButton.text("專心上課");
                $yesButton.show();
                $noButton.show();
                break; //做完事情跳出
            case 5:
                $yesButton.text("告訴他!");
                $noButton.text("裝沒事");
                $yesButton.show();
                $noButton.show();
                break; //做完事情跳出
            case 7:
                $yesButton.text("去夜唱");
                $noButton.text("早點洗洗睡");
                $yesButton.show();
                $noButton.show();
                break; //做完事情跳出
            case 10:
                $yesButton.text("愛慕虛榮系花");
                $noButton.text("乖乖牌");
                $yesButton.show();
                $noButton.show();
                break; //做完事情跳出
            case 4:
            case 6:
            case 9:
                $yesButton.text("回頭再選擇一次");
                $noButton.hide();
                break;
            case 8:
            case 11:
                $yesButton.text("再玩一次");
                $noButton.hide();


        }


    }



    //yesButton按下去做了決定1
    $yesButton.click(function () {
        makeDecision(1);
    });
    //noButton按下去做了決定2
    $noButton.click(function () {
        makeDecision(2);
    });

});
