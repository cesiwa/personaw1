import { Topic, Test, Question } from './types';

export const DATA: Topic[] = [
    {
        id: '1',
        title: 'İlişkiler',
        color: '#FF4B4B', // Red
        image: '❤️', // Using emoji as placeholder as requested
        tests: [
            {
                id: 't1',
                topicId: '1',
                title: 'Sevgilin Seni Manipüle Ediyor mu?',
                description: 'İlişkinde her şey yolunda mı yoksa fark etmeden kontrol mü ediliyorsun?',
                questions: [
                    { id: 'q1', text: 'Kararlarını sürekli sorguluyor mu?', points: 10 },
                    { id: 'q2', text: 'Seni arkadaşlarından uzaklaştırıyor mu?', points: 10 },
                    { id: 'q3', text: 'Hatalı olduğun durumlarda bile seni suçluyor mu?', points: 10 },
                    { id: 'q4', text: 'Seni başkalarıyla kıyaslıyor mu?', points: 10 },
                    { id: 'q5', text: 'Duygularını önemsizleştiriyor mu?', points: 10 },
                ]
            },
            {
                id: 't2',
                topicId: '1',
                title: 'Aşk mı Takıntı mı?',
                description: 'Bu sevgi mi yoksa tehlikeli bir bağımlılık mı?',
                questions: [
                    { id: 'q6', text: 'Onsuz nefes alamayacakmış gibi hissediyor musun?', points: 10 },
                    { id: 'q7', text: 'Sürekli nerede olduğunu kontrol ediyor musun?', points: 10 },
                    { id: 'q8', text: 'Onun için kendi değerlerinden vazgeçer misin?', points: 10 },
                    { id: 'q9', text: 'Hayatının merkezi sadece o mu?', points: 10 },
                    { id: 'q10', text: 'Onun mutsuzluğu senin tüm gününü mahvediyor mu?', points: 10 },
                ]
            }
        ]
    },
    {
        id: '2',
        title: 'Sosyal Medya',
        color: '#007AFF', // Blue
        image: '📱',
        tests: [
            {
                id: 't3',
                topicId: '2',
                title: 'Doomscrolling Bağımlısı mısın?',
                description: 'Ekranı kaydırmadan duramıyor musun?',
                questions: [
                    { id: 'q11', text: 'Sabah ilk iş telefonuna mı bakıyorsun?', points: 10 },
                    { id: 'q12', text: 'Tuvalete telefonla gitmezsen eksik hissediyor musun?', points: 10 },
                    { id: 'q13', text: 'Yemek yerken sürekli telefona bakıyor musun?', points: 10 },
                    { id: 'q14', text: 'Bildirim gelmese bile ekranı kontrol ediyor musun?', points: 10 },
                    { id: 'q15', text: 'Gece yatmadan önce saatlerce telefona bakıyor musun?', points: 10 },
                ]
            },
            {
                id: 't4',
                topicId: '2',
                title: 'FOMO Seviyen Ne?',
                description: 'Gelişmeleri kaçırma korkusu hayatını mı yönetiyor?',
                questions: [
                    { id: 'q16', text: 'Arkadaşların bensiz eğleniyor diye endişeleniyor musun?', points: 10 },
                    { id: 'q17', text: 'Her trendi takip etmek zorunda hissediyor musun?', points: 10 },
                    { id: 'q18', text: 'Sürekli hikayelere bakmak zorunda hissediyor musun?', points: 10 },
                    { id: 'q19', text: 'Telefonun şarjı bittiğinde panik oluyor musun?', points: 10 },
                    { id: 'q20', text: 'Başkalarının hayatı seninkinden daha iyi mi görünüyor?', points: 10 },
                ]
            }
        ]
    },
    {
        id: '3',
        title: 'Arkadaşlık',
        color: '#4CD964', // Green
        image: '🤝',
        tests: [
            {
                id: 't5',
                topicId: '3',
                title: 'Arkadaşın Seni Kullanıyor mu?',
                description: 'Dostluk sandığın şey aslında tek taraflı bir çıkar ilişkisi mi?',
                questions: [
                    { id: 'q21', text: 'Sadece işi düştüğünde mi arıyor?', points: 10 },
                    { id: 'q22', text: 'Senin başarılarını kıskanıyor mu?', points: 10 },
                    { id: 'q23', text: 'Sürekli kendi problemlerinden mi bahsediyor?', points: 10 },
                    { id: 'q24', text: 'Sırlarımı başkalarına anlatıyor mu?', points: 10 },
                    { id: 'q25', text: 'Senin için fedakarlık yapıyor mu?', points: 10 },
                ]
            },
            {
                id: 't6',
                topicId: '3',
                title: 'Enerji Vampiri Arkadaş',
                description: 'Onunla görüştükten sonra kendini yorgun ve mutsuz mu hissediyorsun?',
                questions: [
                    { id: 'q26', text: 'Görüşmekten kaçınıyor musun?', points: 10 },
                    { id: 'q27', text: 'Sürekli negatif mi konuşuyor?', points: 10 },
                    { id: 'q28', text: 'Seni eleştirip duruyor mu?', points: 10 },
                    { id: 'q29', text: 'Hayallerini küçümsüyor mu?', points: 10 },
                    { id: 'q30', text: 'Yanında kendin gibi olabiliyor musun?', points: 10 },
                ]
            }
        ]
    }
];
