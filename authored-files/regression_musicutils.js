// } catch (e) {
//     activity.errorMsg(INVALIDPITCH);
//     obj = ["G", 4];
// }
// @@ -3331,7 +3330,32 @@ function _getStepSize(keySignature, pitch, direction, transposition, temperament
// thisPitch = STOSHARP[thisPitch];
// }

// function logicalEquals(s1, s2) {
// console.debug(s1,s2);
if (s1 == s2) {
    return true;
} else if (s1 == "E♯" && s2 == "F") {
    return true;
} else if (s1 == "E" && s2 == "F♭") {
    return true;
} else if (s1 == "F" && s2 == "E♯") {
    return true;
} else if (s1 == "F♭" && s2 == "E") {
    return true;
} else if (s1 == "B♯" && s2 == "C") {
    return true;
} else if (s1 == "B" && s2 == "C♭") {
    return true;
} else if (s1 == "C" && s2 == "B♯") {
    return true;
} else if (s1 == "C♭" && s2 == "B") {
    return true;
}
return false;
// }

let ii = scale.findIndex((scale) => logicalEquals(scale, pitch)); //indexOf() replaced by findIndex()
// let ii = scale.indexOf(thisPitch);