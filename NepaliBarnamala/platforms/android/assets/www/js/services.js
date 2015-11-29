angular.module('starter.services', [])

.factory('Characters', function () {

    var consonants =
        [{ id: 0, phonetic: 'Ka', nepali: '\u0915', audio: '' },
         { id: 1, phonetic: 'Kha', nepali: '\u0916', audio: '' },
         { id: 2, phonetic: 'Ga', nepali: '\u0917', audio: '' },
         { id: 3, phonetic: 'Gha', nepali: '\u0918', audio: '' },
         { id: 4, phonetic: 'Nga', nepali: '\u0919', audio: '' },
         { id: 5, phonetic: 'Cha', nepali: '\u091A', audio: '' },
         { id: 6, phonetic: 'Chha', nepali: '\u091B', audio: '' },
         { id: 7, phonetic: 'Ja', nepali: '\u091C', audio: '' },
         { id: 8, phonetic: 'Jha', nepali: '\u091D', audio: '' },
         { id: 9, phonetic: 'Yan', nepali: '\u091E', audio: '' },
         { id: 10, phonetic: 'Ta', nepali: '\u091F', audio: '' },
         { id: 11, phonetic: 'Tha', nepali: '\u0920', audio: '' },
         { id: 12, phonetic: 'Da', nepali: '\u0921', audio: '' },
         { id: 13, phonetic: 'Dha', nepali: '\u0922', audio: '' },
         { id: 14, phonetic: 'Ada', nepali: '\u0923', audio: '' },
         { id: 15, phonetic: 'Ta', nepali: '\u0924', audio: '' },
         { id: 16, phonetic: 'Tha', nepali: '\u0925', audio: '' },
         { id: 17, phonetic: 'Da', nepali: '\u0926', audio: '' },
         { id: 18, phonetic: 'Dha', nepali: '\u0927', audio: '' },
         { id: 19, phonetic: 'Yan', nepali: '\u0928', audio: '' },
         { id: 20, phonetic: 'Pa', nepali: '\u092A', audio: '' },
         { id: 21, phonetic: 'Pha', nepali: '\u092B', audio: '' },
         { id: 22, phonetic: 'Ba', nepali: '\u092C', audio: '' },
         { id: 23, phonetic: 'Bha', nepali: '\u092D', audio: '' },
         { id: 24, phonetic: 'Ma', nepali: '\u092E', audio: '' },
         { id: 25, phonetic: 'Ya', nepali: '\u092F', audio: '' },
         { id: 26, phonetic: 'Ra', nepali: '\u0930', audio: '' },
         { id: 27, phonetic: 'La', nepali: '\u0932', audio: '' },
         { id: 28, phonetic: 'Wa', nepali: '\u0935', audio: '' },
         { id: 29, phonetic: 'Sa', nepali: '\u0936', audio: '' },
         { id: 30, phonetic: 'Kha', nepali: '\u0937', audio: '' },
         { id: 31, phonetic: 'Sa', nepali: '\u0938', audio: '' },
         { id: 32, phonetic: 'Ha', nepali: '\u0939', audio: '' },
         { id: 33, phonetic: 'Chhya', nepali: '\u0915\u094D\u0937', audio: '' },
         { id: 34, phonetic: 'Tra', nepali: '\u0924\u094D\u0930', audio: '' },
         { id: 35, phonetic: 'Gyan', nepali: '\u091C\u094D\u091E', audio: '' }];

    var vowels =
       [{ id: 0, phonetic: 'A', nepali: '\u0915', audio: '' },
        { id: 1, phonetic: 'Aa', nepali: '\u0916', audio: '' },
        { id: 2, phonetic: 'E', nepali: '\u0917', audio: '' },
        { id: 3, phonetic: 'Ee', nepali: '\u0918', audio: '' },
        { id: 4, phonetic: 'U', nepali: '\u0919', audio: '' },
        { id: 5, phonetic: 'Uu', nepali: '\u091A', audio: '' },
        { id: 6, phonetic: 'Ae', nepali: '\u091B', audio: '' },
        { id: 7, phonetic: 'Ai', nepali: '\u091C', audio: '' },
        { id: 8, phonetic: 'O', nepali: '\u091D', audio: '' },
        { id: 9, phonetic: 'Ou', nepali: '\u091E', audio: '' },
        { id: 10, phonetic: 'Am', nepali: '\u091F', audio: '' },
        { id: 11, phonetic: 'AA', nepali: '\u0920', audio: '' }];

    return {
        allConsonants: function () {
            return consonants;
        },
        allVowels: function(){
            return vowels;
        }
    };
});
