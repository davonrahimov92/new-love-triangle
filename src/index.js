/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences) {
    var count = preferences.length;
    var loveTrianglesCount = 0;
    for(var i=0;i<count;i++) {
        if(preferences[i] !== -1) {
            var i_love = preferences[i];
            var i_love_love = preferences[i_love-1];
            var i_love_love_love = preferences[i_love_love-1];
            if( i + 1!== i_love && i_love_love_love === i + 1) {
                preferences[i] = preferences[i_love-1] = preferences[i_love_love-1] = -1;
                loveTrianglesCount++;
            }
        }
    }
    return loveTrianglesCount;
};
