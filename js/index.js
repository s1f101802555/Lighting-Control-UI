let light = 0;

function Light() {
    switch(light){
        case 0:
            alert('電気を付けました。');
            light = 1;
            break;
        case 1:
            alert('電気を消しました。');
            light = 0;
            break;
        default:
            break;
    }
    return 0;
  }

let auto = 0;
function Automatic(){
    switch(auto){
        case 0:
            alert('自動設定ON。');
            auto = 1;
            break;
        case 1:
            alert('自動設定OFF。');
            auto = 0;
            break;
        default:
            break;
    }
}

var bright = 0;
function bright_low(){
    if(light == 0){
        alert('電気がついていません!');
        return 0;
    }
    if(bright == -2){
        alert('最大の暗さです。')
        return 0;
    }
    bright -= 1;
    switch(bright){
        case -2:
            alert('とても暗くしました。');
            break;
        case -1:
            alert('暗くしました。');
            break;
        case 0:
            alert('普通の明るさです。');
            break;
        case 1:
            alert('明るくしました。');
            break;
    }
    return 0;
}

function bright_high(){
    if(light == 0){
        alert('電気がついていません!');
        return 0;
    }
    if(bright == 2){
        alert('最大の明るさです。')
        return 0;
    }
    bright += 1;
    switch(bright){
        case -1:
            alert('暗くしました。');
            break;
        case 0:
            alert('普通の明るさです。');
            break;
        case 1:
            alert('明るくしました。');
            break;
        case 2:
            alert('とても明るくしました。');
            break;
    }
    return 0;
}


