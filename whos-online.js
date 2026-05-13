function whosOnline(friends) {
  var result = {};

  friends.forEach(function (friend) {
    var currentStatus = friend.status;
    if (friend.status === 'online' && friend.lastActivity > 10) {
      currentStatus = 'away';
    }

    if (!result[currentStatus]) {
      result[currentStatus] = [];
    }

    result[currentStatus].push(friend.username);
  });

  return result;
}