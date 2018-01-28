messageViewer(calDiscountTicket(100000, [0, 0, 0]));

// メッセージの配列を受け取り、表示するオマケ機能
function messageViewer(Messages){
  for(var i = 0; i < Messages.length; i++){
    console.log(Messages[i]);
    }
}

// メイン機能
function calDiscountTicket(total, number){
  // 割引値を配列で保持
  var discount = [1000, 500, 100];
  // 残額
  var balance;
  // 利用可能枚数
  var availableTicket = [];
  var message;
  // 返却メッセージはAllMessageに格納します
  var AllMessages = [];

  // 想定外の入力値に対するチェック処理 5000円未満
  if(total < 5000){
    message = '割引券は5000円以上の場合のみ、使用できます';
    AllMessages.push(message);
    return AllMessages;
  }

  // 想定外の入力値に対するチェック処理 割引券がない
  for(var i = 0; i < number.length; i++){
    if(number[i] != 0){
      break;
    }else if(i === number.length - 1){
      message = '使用できる割引券はありません';
      AllMessages.push(message);
      return AllMessages;
    }
  }

  // 残額に合計金額を設定する
  balance = total;

  for(var i = 0; i < number.length; i++){
    var discountPrice = discount[i];
    var ticketsNum = number[i];
    var limit;
    var message;

    // 使用限界枚数の算出
    limit = Math.floor(balance / discountPrice);
    if(limit <= ticketsNum){
      // 使用限界枚数を設定する
      availableTicket[i] = limit;
      // 残額を再設定する
      balance = balance - limit * discountPrice;
    }else if(limit > ticketsNum && ticketsNum != 0){
      // 使用限界枚数より少ない場合、保持している割引券は全て使用可能と判定する。使用可能枚数を設定する
      availableTicket[i] = ticketsNum;
      // 残額を再設定する
      balance = balance - ticketsNum * discountPrice;
    }else{
      availableTicket[i] = 0;
    }
  }
  // メッセージ作成処理 使用可能な割引券に関するメッセージのみ格納する
  for(var i = 0; i < availableTicket.length; i++){
    if(availableTicket[i] !== 0){
      message = discount[i] + '円の割引券を' + availableTicket[i] + '枚使用できます。';
      AllMessages.push(message);
    }
  }
  // 残金メッセージの格納
  message = '残金は' + balance + '円です';
  AllMessages.push(message);

  // メッセージの返却
  return AllMessages;
}
