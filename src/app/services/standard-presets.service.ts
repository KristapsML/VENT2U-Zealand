export class StandardPresetsService {
  getStandardPresets() {
    return [
      {
        name: 'This room',
        temperature: {
          value: 20,
          active: false
        },
        humidity: {
          value: 40,
          active: false
        },
        airflow: {
          value: 5,
          active: false
        }
      },

      {
        name: 'Cold + humid',
        temperature: {
          value: 19,
          active: true
        },
        humidity: {
          value: 75,
          active: true
        },
        airflow: {
          value: 8,
          active: true
        }
      },

      {
        name: 'Quick warm up',
        temperature: {
          value: 25,
          active: true
        },
        humidity: {
          value: 30,
          active: true
        },
        airflow: {
          value: 10,
          active: true
        }
      }
    ]
      ;
  }
}
