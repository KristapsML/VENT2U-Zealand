export class ProductService {
  getUsers() {
    return [
      {
        id: 1,
        email: 'user@edu.easj.dk',
        password: 'password123',
        name: 'Jane Doe',
        settings: [
          {
            canReturnToSpot: true,
            canReturnToSettings: false
          }
        ],
        userPresets: [
          {
            name: 'Amazon feeling',
            temperature: {
              value: 32,
              active: true
            },
            humidity: {
              value: 80,
              active: true
            },
            airflow: {
              value: 4,
              active: true
            }
          },
          {
            name: 'My cold settings',
            temperature: {
              value: 22.3,
              active: true
            },
            humidity: {
              value: 45,
              active: true
            },
            airflow: {
              value: 2,
              active: false
            }
          }
        ]
      }
    ]
      ;
  }
}
