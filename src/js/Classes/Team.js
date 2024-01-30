/**
 * хранит и управляет командой персонажей
 * @class
 */
export default class Team {
  members = new Set();

  /**
   * добавляет персонажа в команду
   * @param {object} character персонаж
   * @throws {Error} при добавлении уникального персонажа
   */
  add(character) {
    if (this.members.has(character)) {
      throw new Error(
        'нельзя добавить больше одного уникального типа персонажа'
      );
    }

    this.members.add(character);
  }

  /**
   * добавляет в команду массив персонажей,
   * исключая повторы
   * @param {Array} characters массив персонажей
   */
  addAll(characters) {
    this.members = new Set([...this.members, ...characters]);
  }

  /**
   * преобразует команду в массив и возвращает его
   * @returns {Array} команда
   */
  toArray() {
    return [...this.members];
  }
}
