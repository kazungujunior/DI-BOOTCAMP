#Exercises XP
#Exercise 1 – Random Sentence Generator
from random import choice


def get_words_from_file(file):
    with open(file) as f:
        word_list = f.readlines()
        word_list = [word.replace("\n", "") for word in word_list]
        return word_list


def get_random_sentence(word_list, num):
    new_sentence = []
    for word in range(num):
        new_sentence.append(choice(word_list).title())
    return " ".join(new_sentence)


def main():
    print("This program takes your chosen length between 2-20 and generates a random sentence")
    num = int(input("Please enter the length: "))
    if 2 <= num <= 20:
        text = get_words_from_file("sowpods.txt")
        print(get_random_sentence(text, num))
    else:
        raise ValueError


main()
#Exercise 2: Working With JSON
import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""
#Access the nested key “salary” from the above JSON-string
#Sort the dictionary key-value pairs inside “payable” alphabetically, by their key, using code
#Save the dictionary as JSON to a file
import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

data = json.loads(sampleJson)

print(data['company']['employee']['payable']['salary'])

data['company']['employee']['birth_date'] = '03/12/1991'

with open('exercise.json', 'w') as f:
    json.dump(data, f, indent=2, sort_keys=True)
#Exercises XP GOLD
#Exercise 1 – Restaurant Menu Manager
menu_manager.py

import json

class MenuManager():

    def __init__(self):
        self.menu = open('menu.json')
        menu_json = self.menu.read()
        self.menu.close()
        self.menu = json.loads(menu_json)


    def add_item(self, name, price):
        new_item = {"name": name, "price": price}
        self.menu["items"].append(new_item)

    def change_price(self, name, price):
        for x in range(len(self.menu["items"])):
            if self.menu["items"][x]["name"] == name:
                self.menu["items"][x]["price"] = price
                return True
        return False

    def remove_item(self, name):
        for x in range (len(self.menu["items"])):
            if self.menu["items"][x]["name"] == name:
                del self.menu["items"][x]
                return True
        return False

    def save_to_file(self):
        menu_json = json.dumps(self.menu)
        menu_file = open('menu.json', 'w+')
        menu_file.write(menu_json)

#menu_editor.py

import menu_manager

def load_manager():
    return menu_manager.MenuManager()

my_menu_manager = load_manager()

def show_restaurant_menu(menu):
    print()
    print("Items               Prices\n")
    for x in range(len(menu.menu["items"])):
        print(menu.menu["items"][x]["name"] + (" " * (20 - len(menu.menu["items"][x]["name"]))) + str(menu.menu["items"][x]["price"]))
    print()

def show_user_menu(menu):
    menu_display = ("""
    **********************
    *     Menu           *
    * (a) Add an item    *
    * (d) Delete an item *
    * (c) Change a price *
    * (v) View the menu  *
    * (x) Exit           *
    **********************
        """)
    user_selection = "u"
    while user_selection != "x":
        print(menu_display)
        user_selection = input("Select Menu Option: ")
        if user_selection == "a":
            name = input("What item would you like to add to the menu?")
            price = input("How much will it cost?")
            my_menu_manager.add_item(name, price)
            print("The following item has been added to the menu...")
            print("Name: " + name + "    Price: " + str(price))
        elif user_selection == "d":
            item = input("What item would you like to remove from the menu?")
            check = my_menu_manager.remove_item(item)
            if check == True:
                print("The following item has been removed from the menu...")
                print("Item: " + item)
            elif check == False:
                print("That item is not in the menu...")
        elif user_selection == "c":
            item = input("Which item would you like to change the price for?")
            new_price = input("What should the new price new?")
            my_menu_manager.change_price(item, new_price)
            print("The new price for " + item + " is " + str(new_price))
        elif user_selection == "v":
            show_restaurant_menu(menu)
        elif user_selection == "x":
            my_menu_manager.save_to_file()
            print("Your menu has been saved to file")



# runs whole programme loading previously saved menu
show_user_menu(my_menu_manager)
#Exercise 2 : Giphy API #1
#Missing part of the correction

import requests

def main():
    giphy_url = "https://api.giphy.com/v1/gifs/search"
    # param = {
    #     "api_key": "dc6zaTOxFJmzC",
    #     "q": "hilarious",
    #     "limit": 20,
    #     "offset": 0,
    #     "rating": "g",
    #     "lang": "en"
    # }
    # ?q=hilarious&rating=g&api_key=dc6zaTOxFJmzC"
    response = requests.get(giphy_url, params={ "api_key": "dc6zaTOxFJmzC","q": "hilarious",})
    if response.status_code == 200:
        data = response.json()
        print(data)


if __name__ == "__main__":
    main()
#Exercise 3 : Giphy API #2
#Missing Correction

#Exercises XP NINJA
#Exercise 1 : Restaurant Menu Manager (Continuation)
#Missing Correction

#Exercise 2 : Dungeons & Dragons
#Missing Correction

#Daily Challenge : Text Analysis
from string import punctuation
from nltk.corpus import stopwords


class Text:
    def __init__(self, text):
        self.text = text

    def freq(self, word):
        return self.text.split(" ").count(word) if self.text.split(" ").count(word) > 0 else None

    def common(self):
        text_set = list(set(self.text.split(" ")))
        highest = text_set.pop(0)
        for word in text_set:
            if self.text.split(" ").count(word) > self.text.split(" ").count(highest):
                highest = word
        return highest

    def unique(self):
        return list(set(self.text.split(" ")))

    @classmethod
    def from_file(cls, text_file):
        with open(text_file) as f:
            word_list = f.readlines()
            word_list = [word.replace("\n", "") for word in word_list]
            return Text(" ".join(word_list))


class TextModification(Text):
    def __init__(self, text):
        super().__init__(text)

    def de_punc(self):
        return "".join([word for word in self.text if punctuation.count(word) == 0])

    def de_stopwords(self):
        return " ".join([word for word in self.text.split(" ") if stopwords.words('english').count(word) == 0])


book = Text.from_file("my_text.txt")
print(book.common())
print(book.unique())
print(book.freq("the"))
book2 = TextModification(book.text)
print(book2.de_punc())
print(book2.de_stopwords())
#OR

class Text:

    def __init__(self, text):
        self.text = text.lower().replace("\n"," ")  # "the quick brown fox jumps over the lazy dog fox fox"
        self.word_list = self.text.split(" ")  # ["the", "quick".... "fox", "fox"]
        self.all_words_count = {}
        self._count_words()
            # {
            #   "the": 2,
            #   "quick": 1,
            #   "fox": 3
            # }

    @classmethod
    def from_file(cls, file_path):
        with open(file_path, "r") as f:
            file_contents = f.read()

        return cls(file_contents)

    def _count_words(self):
        distinct_words = set(self.word_list) 
        for word in distinct_words:
            self.all_words_count[word] = self.word_list.count(word)

    def get_frequency_of_word(self, word):
        return self.all_words_count.get(word) or 0

    def get_most_common_word(self):
        biggest_entry = ('',0)
        for entry in self.all_words_count.items():
            if entry[1] > biggest_entry[1]:
                biggest_entry = entry

        return biggest_entry

    def get_unique_words(self):
        unique_words = []
        for entry in self.all_words_count.items():
            if entry[1] == 1:
                unique_words.append(entry[0])

        return unique_words



class TextModification(Text):

    def __init__(self, text):
        super().__init__(text)

        self.word_list = self.remove_stopwords()
        self.remove_special_chars()
        self._count_words()

    stopwords = ("0o", "0s", "3a", "3b", "3d", "6b", "6o", "a", "a1", "a2", "a3", "a4", "ab", "able", "about", "above", "abst", "ac", "accordance", "according", "accordingly", "across", "act", "actually", "ad", "added", "adj", "ae", "af", "affected", "affecting", "affects", "after", "afterwards", "ag", "again", "against", "ah", "ain", "ain't", "aj", "al", "all", "allow", "allows", "almost", "alone", "along", "already", "also", "although", "always", "am", "among", "amongst", "amoungst", "amount", "an", "and", "announce", "another", "any", "anybody", "anyhow", "anymore", "anyone", "anything", "anyway", "anyways", "anywhere", "ao", "ap", "apart", "apparently", "appear", "appreciate", "appropriate", "approximately", "ar", "are", "aren", "arent", "aren't", "arise", "around", "as", "a's", "aside", "ask", "asking", "associated", "at", "au", "auth", "av", "available", "aw", "away", "awfully", "ax", "ay", "az", "b", "b1", "b2", "b3", "ba", "back", "bc", "bd", "be", "became", "because", "become", "becomes", "becoming", "been", "before", "beforehand", "begin", "beginning", "beginnings", "begins", "behind", "being", "believe", "below", "beside", "besides", "best", "better", "between", "beyond", "bi", "bill", "biol", "bj", "bk", "bl", "bn", "both", "bottom", "bp", "br", "brief", "briefly", "bs", "bt", "bu", "but", "bx", "by", "c", "c1", "c2", "c3", "ca", "call", "came", "can", "cannot", "cant", "can't", "cause", "causes", "cc", "cd", "ce", "certain", "certainly", "cf", "cg", "ch", "changes", "ci", "cit", "cj", "cl", "clearly", "cm", "c'mon", "cn", "co", "com", "come", "comes", "con", "concerning", "consequently", "consider", "considering", "contain", "containing", "contains", "corresponding", "could", "couldn", "couldnt", "couldn't", "course", "cp", "cq", "cr", "cry", "cs", "c's", "ct", "cu", "currently", "cv", "cx", "cy", "cz", "d", "d2", "da", "date", "dc", "dd", "de", "definitely", "describe", "described", "despite", "detail", "df", "di", "did", "didn", "didn't", "different", "dj", "dk", "dl", "do", "does", "doesn", "doesn't", "doing", "don", "done", "don't", "down", "downwards", "dp", "dr", "ds", "dt", "du", "due", "during", "dx", "dy", "e", "e2", "e3", "ea", "each", "ec", "ed", "edu", "ee", "ef", "effect", "eg", "ei", "eight", "eighty", "either", "ej", "el", "eleven", "else", "elsewhere", "em", "empty", "en", "end", "ending", "enough", "entirely", "eo", "ep", "eq", "er", "es", "especially", "est", "et", "et-al", "etc", "eu", "ev", "even", "ever", "every", "everybody", "everyone", "everything", "everywhere", "ex", "exactly", "example", "except", "ey", "f", "f2", "fa", "far", "fc", "few", "ff", "fi", "fifteen", "fifth", "fify", "fill", "find", "fire", "first", "five", "fix", "fj", "fl", "fn", "fo", "followed", "following", "follows", "for", "former", "formerly", "forth", "forty", "found", "four", "fr", "from", "front", "fs", "ft", "fu", "full", "further", "furthermore", "fy", "g", "ga", "gave", "ge", "get", "gets", "getting", "gi", "give", "given", "gives", "giving", "gj", "gl", "go", "goes", "going", "gone", "got", "gotten", "gr", "greetings", "gs", "gy", "h", "h2", "h3", "had", "hadn", "hadn't", "happens", "hardly", "has", "hasn", "hasnt", "hasn't", "have", "haven", "haven't", "having", "he", "hed", "he'd", "he'll", "hello", "help", "hence", "her", "here", "hereafter", "hereby", "herein", "heres", "here's", "hereupon", "hers", "herself", "hes", "he's", "hh", "hi", "hid", "him", "himself", "his", "hither", "hj", "ho", "home", "hopefully", "how", "howbeit", "however", "how's", "hr", "hs", "http", "hu", "hundred", "hy", "i", "i2", "i3", "i4", "i6", "i7", "i8", "ia", "ib", "ibid", "ic", "id", "i'd", "ie", "if", "ig", "ignored", "ih", "ii", "ij", "il", "i'll", "im", "i'm", "immediate", "immediately", "importance", "important", "in", "inasmuch", "inc", "indeed", "index", "indicate", "indicated", "indicates", "information", "inner", "insofar", "instead", "interest", "into", "invention", "inward", "io", "ip", "iq", "ir", "is", "isn", "isn't", "it", "itd", "it'd", "it'll", "its", "it's", "itself", "iv", "i've", "ix", "iy", "iz", "j", "jj", "jr", "js", "jt", "ju", "just", "k", "ke", "keep", "keeps", "kept", "kg", "kj", "km", "know", "known", "knows", "ko", "l", "l2", "la", "largely", "last", "lately", "later", "latter", "latterly", "lb", "lc", "le", "least", "les", "less", "lest", "let", "lets", "let's", "lf", "like", "liked", "likely", "line", "little", "lj", "ll", "ll", "ln", "lo", "look", "looking", "looks", "los", "lr", "ls", "lt", "ltd", "m", "m2", "ma", "made", "mainly", "make", "makes", "many", "may", "maybe", "me", "mean", "means", "meantime", "meanwhile", "merely", "mg", "might", "mightn", "mightn't", "mill", "million", "mine", "miss", "ml", "mn", "mo", "more", "moreover", "most", "mostly", "move", "mr", "mrs", "ms", "mt", "mu", "much", "mug", "must", "mustn", "mustn't", "my", "myself", "n", "n2", "na", "name", "namely", "nay", "nc", "nd", "ne", "near", "nearly", "necessarily", "necessary", "need", "needn", "needn't", "needs", "neither", "never", "nevertheless", "new", "next", "ng", "ni", "nine", "ninety", "nj", "nl", "nn", "no", "nobody", "non", "none", "nonetheless", "noone", "nor", "normally", "nos", "not", "noted", "nothing", "novel", "now", "nowhere", "nr", "ns", "nt", "ny", "o", "oa", "ob", "obtain", "obtained", "obviously", "oc", "od", "of", "off", "often", "og", "oh", "oi", "oj", "ok", "okay", "ol", "old", "om", "omitted", "on", "once", "one", "ones", "only", "onto", "oo", "op", "oq", "or", "ord", "os", "ot", "other", "others", "otherwise", "ou", "ought", "our", "ours", "ourselves", "out", "outside", "over", "overall", "ow", "owing", "own", "ox", "oz", "p", "p1", "p2", "p3", "page", "pagecount", "pages", "par", "part", "particular", "particularly", "pas", "past", "pc", "pd", "pe", "per", "perhaps", "pf", "ph", "pi", "pj", "pk", "pl", "placed", "please", "plus", "pm", "pn", "po", "poorly", "possible", "possibly", "potentially", "pp", "pq", "pr", "predominantly", "present", "presumably", "previously", "primarily", "probably", "promptly", "proud", "provides", "ps", "pt", "pu", "put", "py", "q", "qj", "qu", "que", "quickly", "quite", "qv", "r", "r2", "ra", "ran", "rather", "rc", "rd", "re", "readily", "really", "reasonably", "recent", "recently", "ref", "refs", "regarding", "regardless", "regards", "related", "relatively", "research", "research-articl", "respectively", "resulted", "resulting", "results", "rf", "rh", "ri", "right", "rj", "rl", "rm", "rn", "ro", "rq", "rr", "rs", "rt", "ru", "run", "rv", "ry", "s", "s2", "sa", "said", "same", "saw", "say", "saying", "says", "sc", "sd", "se", "sec", "second", "secondly", "section", "see", "seeing", "seem", "seemed", "seeming", "seems", "seen", "self", "selves", "sensible", "sent", "serious", "seriously", "seven", "several", "sf", "shall", "shan", "shan't", "she", "shed", "she'd", "she'll", "shes", "she's", "should", "shouldn", "shouldn't", "should've", "show", "showed", "shown", "showns", "shows", "si", "side", "significant", "significantly", "similar", "similarly", "since", "sincere", "six", "sixty", "sj", "sl", "slightly", "sm", "sn", "so", "some", "somebody", "somehow", "someone", "somethan", "something", "sometime", "sometimes", "somewhat", "somewhere", "soon", "sorry", "sp", "specifically", "specified", "specify", "specifying", "sq", "sr", "ss", "st", "still", "stop", "strongly", "sub", "substantially", "successfully", "such", "sufficiently", "suggest", "sup", "sure", "sy", "system", "sz", "t", "t1", "t2", "t3", "take", "taken", "taking", "tb", "tc", "td", "te", "tell", "ten", "tends", "tf", "th", "than", "thank", "thanks", "thanx", "that", "that'll", "thats", "that's", "that've", "the", "their", "theirs", "them", "themselves", "then", "thence", "there", "thereafter", "thereby", "thered", "therefore", "therein", "there'll", "thereof", "therere", "theres", "there's", "thereto", "thereupon", "there've", "these", "they", "theyd", "they'd", "they'll", "theyre", "they're", "they've", "thickv", "thin", "think", "third", "this", "thorough", "thoroughly", "those", "thou", "though", "thoughh", "thousand", "three", "throug", "through", "throughout", "thru", "thus", "ti", "til", "tip", "tj", "tl", "tm", "tn", "to", "together", "too", "took", "top", "toward", "towards", "tp", "tq", "tr", "tried", "tries", "truly", "try", "trying", "ts", "t's", "tt", "tv", "twelve", "twenty", "twice", "two", "tx", "u", "u201d", "ue", "ui", "uj", "uk", "um", "un", "under", "unfortunately", "unless", "unlike", "unlikely", "until", "unto", "uo", "up", "upon", "ups", "ur", "us", "use", "used", "useful", "usefully", "usefulness", "uses", "using", "usually", "ut", "v", "va", "value", "various", "vd", "ve", "ve", "very", "via", "viz", "vj", "vo", "vol", "vols", "volumtype", "vq", "vs", "vt", "vu", "w", "wa", "want", "wants", "was", "wasn", "wasnt", "wasn't", "way", "we", "wed", "we'd", "welcome", "well", "we'll", "well-b", "went", "were", "we're", "weren", "werent", "weren't", "we've", "what", "whatever", "what'll", "whats", "what's", "when", "whence", "whenever", "when's", "where", "whereafter", "whereas", "whereby", "wherein", "wheres", "where's", "whereupon", "wherever", "whether", "which", "while", "whim", "whither", "who", "whod", "whoever", "whole", "who'll", "whom", "whomever", "whos", "who's", "whose", "why", "why's", "wi", "widely", "will", "willing", "wish", "with", "within", "without", "wo", "won", "wonder", "wont", "won't", "words", "world", "would", "wouldn", "wouldnt", "wouldn't", "www", "x", "x1", "x2", "x3", "xf", "xi", "xj", "xk", "xl", "xn", "xo", "xs", "xt", "xv", "xx", "y", "y2", "yes", "yet", "yj", "yl", "you", "youd", "you'd", "you'll", "your", "youre", "you're", "yours", "yourself", "yourselves", "you've", "yr", "ys", "yt", "z", "zero", "zi", "zz")
    special_chars = ('!', '”', '#', '$', '%', '&', '’', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~')

    def remove_stopwords(self):
        return list(filter(lambda word: word not in self.stopwords, self.word_list))

    def remove_special_chars(self):
        for char in self.special_chars:
            self.text = self.text.replace(char, "")

    # # This is the same as the lambda
    # def is_not_a_stopword(self, word):
    #   if word not in self.stopwords:
    #       return True
    #   return False


#Daily Challenge : Text Analysis other solution
import re
import os
import nltk
nltk.download('stopwords')
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from collections import Counter

dir_path = os.path.dirname(os.path.realpath(__file__))
print(dir_path)

class Text:
    def __init__(self, text_str) -> None:
        self.text_str = text_str

    @staticmethod
    def clean_ponctuation(text_str):
        text_str = re.sub(r'[.,\/#!$%\^&\*;:{}=\-_`~()]', '', text_str)
        return text_str

    @staticmethod
    def check_stop_words(text_str):
        stop_words = set(stopwords.words('english'))
        text_str = text_str.lower().split()
        cleaned_text = [word for word in text_str if word not in stop_words]
        return ' '.join(cleaned_text)

    @classmethod
    def from_file(cls, text_file):
        with open(f'{dir_path}\\{text_file}', mode='r') as file:
            text_file = file.read()
            return cls(text_file)

    def frequency(self, word):
        text_str = Text.clean_ponctuation(self.text_str)
        text_str = text_str.lower().split()
        frequency = text_str.count(word.lower())
        return f'The frequency of {word} is {frequency}'

    def most_common(self):
        text_str = Text.clean_ponctuation(self.text_str)
        text_str = Text.check_stop_words(self.text_str)
        text_str = text_str.lower().split()
        c_obj = Counter(text_str)
        most_common = c_obj.most_common(1)
        word, times = most_common[0]
        return f'the most common word is `{word}` it appears {times} times'

    def unique_words(self):
        text_str = Text.clean_ponctuation(self.text_str)
        text_str = text_str.lower().split()
        unique = set(text_str)
        return f'the unique words in the string are: {unique}'


# Example Usage
text_instance = Text("Sample text with some, punctuation! and stopwords.")
cleaned_text = Text.clean_ponctuation(text_instance.text_str)
print("Cleaned Text:", cleaned_text)
cleaned_text_no_stopwords = Text.check_stop_words(cleaned_text)
print("Without Stopwords:", cleaned_text_no_stopwords)

the_stranger = Text.from_file('the_stranger.txt')
print(the_stranger.unique_words())
print(the_stranger.most_common())
print(the_stranger.frequency('good'))