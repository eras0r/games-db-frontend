/**
 * Generic class representing a filter, which can be used when doing queries against the REST API.
 */
export class Filter<T> {

  /**
   * Creates a new Filter for an entity class.
   *
   * @param where the where criteria which restricts the objects being returned.
   */
  constructor(private where?: T) {

  }

}
