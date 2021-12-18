# 영어 사전 라이브러리 불러오기
import enchant


# 가능한 단어 만드는 함수
def generate_words(strings: list) -> None:
    n = len(strings)
    used = [0] * n
    arr = [0] * n
    result = []

    # 사전
    d = enchant.Dict("en_US")

    # 모든 경우의 수를 조합해보는 함수
    def perm(level: int) -> None:
        if level >= n:
            string = ''.join(arr)
            if string not in result and d.check(string):
                result.append(string)
                print(f'[{len(result)}] {string}')
            return

        for i in range(n):
            if used[i] == 1:
                continue
            used[i] = 1
            arr[level] = strings[i]
            perm(level + 1)
            arr[level] = 0
            used[i] = 0

    perm(0)



print('WordCracker')
strings = list(str(input("영어 알파벳을 입력하세요(ex. drfdsg): ")))
generate_words(strings)