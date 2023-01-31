db.customer.insertOne(
    {
        name: 'Anna Pintado',
        zip_code: '08240',
        phone: '638990042',
        mail: 'annap_92@hotmail,com',
        registration_data: new Date('2022-03-14'),
        recommendation_id: ObjectId('000000000000000000000000'),
        purchases: [{
            glasses_id: FALTAAAAAA,
            seller_name: 'Maria Gonzalez',
            purchase_date: new Date('2022-03-14')
        },{
            glasses_id: FALTAAAAA,
            seller_name: 'Victor Ruiz',
            purchase_date: new Date('2023-01-31')

        }]
})

db.customer.insertOne(
    {
        name: 'Josep Molina',
        zip_code: '08010',
        phone: '619773114',
        mail: 'josepmolina@gmail.com',
        registration_data: ISODate("2019-12-24"),
        recommendation_id: ObjectId("FALTAAAAAA"),
        purchases: [{
            glasses_id: FALTAAAAAA,
            seller_name: 'Victor Ruiz',
            purchase_date: new Date('2023-01-02')
        }]
})

db.provider.insertOne(
    {
        name: 'Optim S.A',
        address: {
            street: 'Gran Via',
            number: '998',
            floor: '4',
            door: '2',
            city: 'Barcelona',
            zip_code: '08018',
            country:'Espanya', 
        },
        phone: '657992812',
        fax: '938745561',
        nif: '39382133A', 
        glasses: [{
            glasses_id: 1,
            brand: 'Etnia Barcelona',
            left_eye_graduation: new Double(+2.25),
            right_eye_graduation: new Double(+3.00),
            frame_type: 'Metal',
            frame_color: 'Red',
            glass_color: 'Grey',
            price: NumberDecimal('135.50')
        },{
            brand: 'Silhouette',
            left_eye_graduation: new Double(+3.00),
            right_eye_graduation: new Double(+3.75),
            frame_type: 'Floating',
            frame_color: 'Black',
            glass_color: 'Blue',
            price: NumberDecimal('230.00')
        }]
    })
    
    db.provider.insertOne(
        {
            name: 'SoloGafas, S.L',
            address: {
                street: 'Passeig Pere III',
                number: '73',
                floor: '1',
                door: '4',
                city: 'Manresa',
                zip_code: '08242',
                country:'Espanya', 
            },
            phone: '623377123',
            fax: '924567120',
            nif: '339387002T', 
            glasses: [{
                brand: 'Oakley',
                left_eye_graduation: new Double(-0.50),
                right_eye_graduation: new Double (-1.00),
                frame_type: 'Pasta',
                frame_color: 'Blue',
                glass_color: 'Brown',
                price: NumberDecimal('99.99')
            }]
    })