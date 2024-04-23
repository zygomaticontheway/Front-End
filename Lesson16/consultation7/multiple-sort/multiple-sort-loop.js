const containerElt = document.querySelector(".container");

fetch ("https://dummyjson.com/users")
    .then(res => res.json())
    .then((json) => render(json.users))

    const render = array => {
        array
          .slice()
          .sort((a, b) => {
            // Сортировка сначала по возрасту, а затем по фамилии
            if (a.age !== b.age) {
              return a.age - b.age; // // Сортировка по возрасту
              //Если возраст одного пользователя (a) отличается от возраста другого
              // пользователя (b),
              // мы возвращаем разницу между их возрастами.
              // Это гарантирует, что пользователи будут отсортированы
              // по возрастанию возраста.
            } else {
              //Если возрасты равны у двух пользователей, мы используем localeCompare
              // для сравнения их фамилий. Это обеспечивает сортировку по алфавиту фамилий в случае,
              // если возрасты равны.
              return a.lastName.localeCompare(b.lastName);
            }
          })
          .forEach(({ firstName, lastName, age, image }) => {
            const cardElem = document.createElement('div');
            const nameElem = document.createElement('p');
            const ageElem = document.createElement('p');
            const avatarElem = document.createElement('img');
      
            avatarElem.src = image;
            avatarElem.alt = `${firstName} ${lastName}`;
      
            nameElem.innerText = `${firstName} ${lastName}`;
            ageElem.innerText = `${age} years old`;
      
            cardElem.append(avatarElem, nameElem, ageElem);
            containerElt.append(cardElem);
          });
      }