interface Words {
    id: number;
    text: string;
}
interface WordsState {
    random: Words[];
    ordinal: Words[];
    text: string;
}
let stateswords: WordsState[] = [
    {
        random: [{ id: 3, text: "regret" }, { id: 4, text: "if" }, { id: 1, text: "You" }, { id: 7, text: "this" }, { id: 5, text: "you" }, { id: 2, text: "won`t" }, { id: 9, text: "specialist" }, { id: 6, text: "employ" }, { id: 8, text: "young" }, { id: 10, text: "these" }, { id: 11, text: "will" }],

        ordinal: [{ id: 1, text: "You" }, { id: 2, text: "won`t" }, { id: 3, text: "regret" }, { id: 4, text: "if" }, { id: 5, text: "you" }, { id: 6, text: "employ" }, { id: 7, text: "this" }, { id: 8, text: "young" }, { id: 9, text: "specialist" }],

        text: "Вы не пожалеете, если возьмете на работу этого молодого специалиста."
    },
    {
        random: [{ id: 4, text: "tennis" }, { id: 8, text: "plays" }, { id: 1, text: "I" }, { id: 3, text: "play" }, { id: 9, text: "basketball" }, { id: 2, text: "often" }, { id: 5, text: "and" }, { id: 11, text: "playing" }, { id: 6, text: "my" }, { id: 10, text: "is" }, { id: 7, text: "friend" }],
        
        ordinal: [{ id: 1, text: "I" }, { id: 2, text: "often" }, { id: 3, text: "play" }, { id: 4, text: "tennis" }, { id: 5, text: "and" }, { id: 6, text: "my" }, { id: 7, text: "friend" }, { id: 8, text: "plays" }, { id: 9, text: "basketball" }],
        
        text: "Я часто играю в теннис, а моя подруга играет в баскетбол."
    },
    {
        random: [{ id: 3, text: "buy" }, { id: 7, text: "if" }, { id: 12, text: "bought" }, { id: 1, text: "She" }, { id: 4, text: "a" }, { id: 9, text: "had" }, { id: 2, text: "would" }, { id: 5, text: "new" }, { id: 8, text: "she" }, { id: 6, text: "car" }, { id: 10, text: "money" }, { id: 11, text: "have" }],

        ordinal: [{ id: 1, text: "She" }, { id: 2, text: "would" }, { id: 3, text: "buy" }, { id: 4, text: "a" }, { id: 5, text: "new" }, { id: 6, text: "car" }, { id: 7, text: "if" }, { id: 8, text: "she" }, { id: 9, text: "had" }, { id: 10, text: "money" }],

        text: "Она бы купила новую машину, если бы у нее были деньги."
    }, {
        random: [{ id: 4, text: "last" }, { id: 3, text: "shopping" }, { id: 7, text: "Kate" }, { id: 2, text: "went" }, { id: 1, text: "We" }, { id: 5, text: "week" }, { id: 9, text: "go" }, { id: 8, text: "didn`t" }, { id: 6, text: "but" }, { id: 10, text: "supermarket" }, { id: 11, text: "don`t" },],

        ordinal: [{ id: 1, text: "We" }, { id: 2, text: "went" }, { id: 3, text: "shopping" }, { id: 4, text: "last" }, { id: 5, text: "week" }, { id: 6, text: "but" }, { id: 7, text: "Kate" }, { id: 8, text: "didn`t" }, { id: 9, text: "go" }],

        text: "Мы ходили за покупками на прошлой неделе, но Кейт не пошла."
    }, {
        random: [{ id: 5, text: "city" }, { id: 2, text: "think" }, { id: 4, text: "my" }, { id: 9, text: "most" }, { id: 10, text: "good" }, { id: 8, text: "best" },{ id: 7, text: "the" }, { id: 1, text: "I" }, { id: 11, text: "goodest" }, { id: 3, text: "that" }, { id: 6, text: "is" }],

        ordinal: [{ id: 1, text: "I" }, { id: 2, text: "think" }, { id: 3, text: "that" }, { id: 4, text: "my" }, { id: 5, text: "city" }, { id: 6, text: "is" }, { id: 7, text: "the" }, { id: 8, text: "best" }],

        text: "Я думаю, что мой город самый лучший!"
    }, {
        random: [{ id: 3, text: "brother" }, { id: 10, text: "fast" }, { id: 5, text: "faster" }, { id: 6, text: "than" }, { id: 1, text: "My" }, { id: 7, text: "me" }, { id: 9, text: "young" }, { id: 2, text: "younger" }, { id: 4, text: "runs" }, { id: 8, text: "run" }, { id: 11, text: "more" }],

        ordinal: [{ id: 1, text: "My" }, { id: 2, text: "younger" }, { id: 3, text: "brother" }, { id: 4, text: "runs" }, { id: 5, text: "faster" }, { id: 6, text: "than" }, { id: 7, text: "me" }],

        text: "Мой младший брат бегает быстрее меня."
    },
    {
        random: [{ id: 4, text: "most" }, { id: 7, text: "a" }, { id: 6, text: "sport" }, { id: 8, text: "dangerouslest" }, { id: 1, text: "Box" }, { id: 9, text: "does" }, { id: 3, text: "the" }, { id: 10, text: "more" }, { id: 5, text: "dangerous" }, { id: 2, text: "is" }],

        ordinal: [{ id: 1, text: "Box" }, { id: 2, text: "is" }, { id: 3, text: "the" }, { id: 4, text: "most" }, { id: 5, text: "dangerous" }, { id: 6, text: "sport" }],

        text: "Бокс это самый опасный спорт."
    },   {
        random: [{ id: 8, text: "do" }, { id: 5, text: "but" }, { id: 2, text: "like" }, { id: 6, text: "hate" }, { id: 1, text: "I" }, { id: 4, text: "sports" }, { id: 3, text: "doing" }, { id: 9, text: "run" }, { id: 7, text: "running" }],

        ordinal: [{ id: 1, text: "I" }, { id: 2, text: "like" }, { id: 3, text: "doing" }, { id: 4, text: "sports" }, { id: 5, text: "but" }, { id: 6, text: "hate" }, { id: 7, text: "running" }],

        text: "Я люблю занятия спортом, но ненавижу бег."
    },  {
        random: [{ id: 7, text: "today" }, { id: 11, text: "walk" }, { id: 12, text: "sleep" }, { id: 9, text: "is" }, { id: 4, text: "after" }, { id: 6, text: "but" }, { id: 2, text: "usually" }, { id: 10, text: "walking" }, { id: 5, text: "work," }, { id: 3, text: "sleeps" },{ id: 8, text: "she" },{ id: 1, text: "She" },],

        ordinal: [{ id: 1, text: "She" }, { id: 2, text: "usually" }, { id: 3, text: "sleeps" }, { id: 4, text: "after" }, { id: 5, text: "work," }, { id: 6, text: "but" }, { id: 7, text: "today" }, { id: 8, text: "she" }, { id: 9, text: "is" }, { id: 10, text: "walking" }],

        text: "Она обычно спит после работы, но сегодня она гуляет."
    }, {
        random: [{ id: 4, text: "music," }, { id: 9, text: "read" }, { id: 7, text: "a" }, { id: 2, text: "off" }, { id: 3, text: "the" }, { id: 5, text: "I`m" }, { id: 1, text: "Turn" }, { id: 10, text: "on" },{ id: 8, text: "book" },{ id: 6, text: "reading" }],

        ordinal: [{ id: 1, text: "Turn" }, { id: 2, text: "off" }, { id: 3, text: "the" }, { id: 4, text: "music," }, { id: 5, text: "I`m" }, { id: 6, text: "reading" }, { id: 7, text: "a" }, { id: 8, text: "book" }],

        text: "Выключи музыку, я читаю книгу!"
    },

]
export default stateswords;