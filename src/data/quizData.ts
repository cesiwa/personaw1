import { Topic, Test, Question } from './types';

export const DATA: Topic[] = [
    {
        id: '1',
        title: 'İLİŞKİLERDE TOKSİKLİK',
        color: '#FF4B4B', // Red
        image: '❤️',
        tests: [
            {
                id: 't1',
                topicId: '1',
                title: 'Aşk mı Yaşıyorsun, Dedektiflik mi?',
                description: 'Kıskançlık mı yoksa güvensizlik mi?',
                questions: [
                    { id: 't1_q1', text: 'Partnerimin sosyal medyada karşı cinsle etkileşimi beni rahatsız eder.', points: 10 },
                    { id: 't1_q2', text: 'Eski sevgililerle iletişim kabul edilemez.', points: 10 },
                    { id: 't1_q3', text: 'Partnerim dışarı çıktığında kimlerle olduğunu bilmek isterim.', points: 10 },
                    { id: 't1_q4', text: 'Fazla özgürlük ilişkiye zarar verir.', points: 10 },
                    { id: 't1_q5', text: 'Kıskanmak sevginin göstergesidir.', points: 10 },
                    { id: 't1_q6', text: 'Partnerimin giyim tarzına karışırım.', points: 10 },
                    { id: 't1_q7', text: 'Onun hayatındaki öncelik ben olmalıyım.', points: 10 },
                    { id: 't1_q8', text: 'Çok fazla arkadaş ortamı ilişkiyi bozar.', points: 10 },
                    { id: 't1_q9', text: 'Bana her şeyi anlatmalı.', points: 10 },
                    { id: 't1_q10', text: 'İçime sinmeyen biri varsa görüşmesini istemem.', points: 10 },
                ]
            },
            {
                id: 't2',
                topicId: '1',
                title: 'Bu İlişkide Patron Kim?',
                description: 'İlişkiyi kim yönetiyor?',
                questions: [
                    { id: 't2_q1', text: 'Partnerim plan yapmadan önce bana danışmalı.', points: 10 },
                    { id: 't2_q2', text: 'İlişkide kararları genelde ben veririm.', points: 10 },
                    { id: 't2_q3', text: 'Onun hayatını düzenlemeye çalışırım.', points: 10 },
                    { id: 't2_q4', text: 'Benim dediğim olmazsa huzursuz olurum.', points: 10 },
                    { id: 't2_q5', text: 'İlişkide bir taraf daha baskın olmalı.', points: 10 },
                    { id: 't2_q6', text: 'Nerede olduğunu bilmezsem rahatsız olurum.', points: 10 },
                    { id: 't2_q7', text: 'Şifre paylaşımı güven göstergesidir.', points: 10 },
                    { id: 't2_q8', text: 'Partnerimin bazı arkadaşlarını onaylamayabilirim.', points: 10 },
                    { id: 't2_q9', text: 'Benim sınırlarım daha önemlidir.', points: 10 },
                    { id: 't2_q10', text: 'Tartışmalarda geri adım atmam.', points: 10 },
                ]
            },
            {
                id: 't3',
                topicId: '1',
                title: 'Manipülasyon mu? Yoo Sadece ‘Hassasım’',
                description: 'Duyguları kullanıyor musun?',
                questions: [
                    { id: 't3_q1', text: 'İstediğimi elde etmek için duygusal davranabilirim.', points: 10 },
                    { id: 't3_q2', text: 'Küsmek bazen işe yarar.', points: 10 },
                    { id: 't3_q3', text: 'Trip atarak mesaj veririm.', points: 10 },
                    { id: 't3_q4', text: 'Partnerim beni üzüyorsa suçluluk hissettirmeliyim.', points: 10 },
                    { id: 't3_q5', text: 'Ağlamak bazen stratejik olabilir.', points: 10 },
                    { id: 't3_q6', text: 'Mesajlara geç cevap vererek ders veririm.', points: 10 },
                    { id: 't3_q7', text: 'Sessizlikle cezalandırırım.', points: 10 },
                    { id: 't3_q8', text: 'Özür dilemesini sağlamak için ortam yaratırım.', points: 10 },
                    { id: 't3_q9', text: 'İmalı konuşurum.', points: 10 },
                    { id: 't3_q10', text: 'Haklı olmasam da geri adım atmam.', points: 10 },
                ]
            },
            {
                id: 't4',
                topicId: '1',
                title: 'İç Ses mi, Şüphe mi?',
                description: 'Güven sorunu yaşıyor musun?',
                questions: [
                    { id: 't4_q1', text: 'Aldatılmaktan sürekli korkarım.', points: 10 },
                    { id: 't4_q2', text: 'Fazla iyi davranış şüphelidir.', points: 10 },
                    { id: 't4_q3', text: 'Partnerim gizli bir şey saklıyor olabilir.', points: 10 },
                    { id: 't4_q4', text: 'Geçmiş ilişkileri kafama takılır.', points: 10 },
                    { id: 't4_q5', text: 'Çok mutluysak yakında bir şey olur diye düşünürüm.', points: 10 },
                    { id: 't4_q6', text: 'Onu kaybetme korkusu yaşarım.', points: 10 },
                    { id: 't4_q7', text: 'Mesajları kontrol etme isteğim olur.', points: 10 },
                    { id: 't4_q8', text: 'Fazla özgürlük risklidir.', points: 10 },
                    { id: 't4_q9', text: 'Karşı cinse güvenmem.', points: 10 },
                    { id: 't4_q10', text: 'Küçük detayları bile sorgularım.', points: 10 },
                ]
            },
            {
                id: 't5',
                topicId: '1',
                title: 'Partnerin Olmadan Yaşayabilir misin?',
                description: 'Bağımlılık seviyen ne?',
                questions: [
                    { id: 't5_q1', text: 'Onsuz kendimi eksik hissederim.', points: 10 },
                    { id: 't5_q2', text: 'Hayatımın merkezi partnerimdir.', points: 10 },
                    { id: 't5_q3', text: 'Sürekli iletişimde olmak isterim.', points: 10 },
                    { id: 't5_q4', text: 'Cevap gecikince paniklerim.', points: 10 },
                    { id: 't5_q5', text: 'Onsuz plan yapmak zor gelir.', points: 10 },
                    { id: 't5_q6', text: 'Ayrılık düşüncesi bile korkutur.', points: 10 },
                    { id: 't5_q7', text: 'Yalnız kalmayı sevmem.', points: 10 },
                    { id: 't5_q8', text: 'Kendi alanımı ihmal ederim.', points: 10 },
                    { id: 't5_q9', text: 'Onun mutluluğu benimkinden önce gelir.', points: 10 },
                    { id: 't5_q10', text: 'Tüm zamanımı onunla geçirmek isterim.', points: 10 },
                ]
            },
            {
                id: 't6',
                topicId: '1',
                title: 'Tartışmada Gerçek Sen Kim?',
                description: 'Çatışma tarzın nasıl?',
                questions: [
                    { id: 't6_q1', text: 'Tartışmalarda sesimi yükseltirim.', points: 10 },
                    { id: 't6_q2', text: 'Eski konuları açarım.', points: 10 },
                    { id: 't6_q3', text: 'Haklı çıkmak benim için önemlidir.', points: 10 },
                    { id: 't6_q4', text: 'Özür dilemek zor gelir.', points: 10 },
                    { id: 't6_q5', text: 'Alaycı konuşurum.', points: 10 },
                    { id: 't6_q6', text: 'Sessiz kalıp karşı tarafı gererim.', points: 10 },
                    { id: 't6_q7', text: 'Kırıcı olabilirim.', points: 10 },
                    { id: 't6_q8', text: 'Uzun süre küs kalırım.', points: 10 },
                    { id: 't6_q9', text: 'Tartışmayı uzatırım.', points: 10 },
                    { id: 't6_q10', text: 'Son sözü ben söylemeliyim.', points: 10 },
                ]
            }
        ]
    },
    {
        id: '2',
        title: 'SOSYAL MEDYA TOKSİKLİĞİ',
        color: '#007AFF', // Blue
        image: '📱',
        tests: [
            {
                id: 't7',
                topicId: '2',
                title: 'Beğeni Bağımlısı mısın?',
                description: 'Onaylanma ihtiyacın ne seviyede?',
                questions: [
                    { id: 't7_q1', text: 'Paylaşımım beklediğim kadar beğeni almazsa moralim bozulur.', points: 10 },
                    { id: 't7_q2', text: 'Story izlenme sayısını sık sık kontrol ederim.', points: 10 },
                    { id: 't7_q3', text: 'Az etkileşim aldığım gün kendimi değersiz hissederim.', points: 10 },
                    { id: 't7_q4', text: 'Beğeni sayısı özgüvenimi etkiler.', points: 10 },
                    { id: 't7_q5', text: 'Paylaşım saatini etkileşime göre ayarlarım.', points: 10 },
                    { id: 't7_q6', text: 'İnsanların beni fark etmesi benim için önemlidir.', points: 10 },
                    { id: 't7_q7', text: 'Çok beğeni alanları kıskanırım.', points: 10 },
                    { id: 't7_q8', text: 'Paylaşımım tutmazsa silmeyi düşünürüm.', points: 10 },
                    { id: 't7_q9', text: 'Sosyal medya performansımı ciddiye alırım.', points: 10 },
                    { id: 't7_q10', text: 'Beğeni azsa “bir şey mi yanlış yaptım” diye düşünürüm.', points: 10 },
                ]
            },
            {
                id: 't8',
                topicId: '2',
                title: 'Stalk Seviyen Tehlikeli mi?',
                description: 'Merak mı takıntı mı?',
                questions: [
                    { id: 't8_q1', text: 'İnsanların profillerini detaylıca incelerim.', points: 10 },
                    { id: 't8_q2', text: 'Eski sevgilimin profilini kontrol ederim.', points: 10 },
                    { id: 't8_q3', text: 'Onun yeni takipleştiklerini merak ederim.', points: 10 },
                    { id: 't8_q4', text: 'Birinin geçmiş gönderilerine kadar inerim.', points: 10 },
                    { id: 't8_q5', text: 'Story izleyenleri tek tek kontrol ederim.', points: 10 },
                    { id: 't8_q6', text: 'Profil analizi yapmayı severim.', points: 10 },
                    { id: 't8_q7', text: 'Fake hesaptan bakmayı düşündüğüm olmuştur.', points: 10 },
                    { id: 't8_q8', text: 'Birini stalklamak bazen keyifli gelir.', points: 10 },
                    { id: 't8_q9', text: 'Takipten çıkmaları fark ederim.', points: 10 },
                    { id: 't8_q10', text: 'Sosyal medya hareketlerini hafızamda tutarım.', points: 10 },
                ]
            },
            {
                id: 't9',
                topicId: '2',
                title: 'Yorumlarda Linç Enerjin Var mı?',
                description: 'Klavye başında nasılsın?',
                questions: [
                    { id: 't9_q1', text: 'Haksız bulduğum paylaşımlara sert yorum yaparım.', points: 10 },
                    { id: 't9_q2', text: 'Tartışmalarda geri adım atmam.', points: 10 },
                    { id: 't9_q3', text: 'Online ortamda daha cesur olurum.', points: 10 },
                    { id: 't9_q4', text: 'İnsanları eleştirmekten çekinmem.', points: 10 },
                    { id: 't9_q5', text: 'Haklı olduğumu kanıtlamak için uzatırım.', points: 10 },
                    { id: 't9_q6', text: 'Biri beni eleştirirse karşılık veririm.', points: 10 },
                    { id: 't9_q7', text: 'Sinirlendiğimde anında yazarım.', points: 10 },
                    { id: 't9_q8', text: 'Yorumlarda sivri dilli olabilirim.', points: 10 },
                    { id: 't9_q9', text: 'Sessiz kalmak yerine tepki vermeyi seçerim.', points: 10 },
                    { id: 't9_q10', text: 'Sosyal medyada polemik hoşuma gider.', points: 10 },
                ]
            },
            {
                id: 't10',
                topicId: '2',
                title: 'Sosyal Medya Seni Değiştirdi mi?',
                description: 'Kendini nasıl hissediyorsun?',
                questions: [
                    { id: 't10_q1', text: 'Başkalarının hayatını kendi hayatımla kıyaslarım.', points: 10 },
                    { id: 't10_q2', text: 'Sosyal medya bazen beni yetersiz hissettirir.', points: 10 },
                    { id: 't10_q3', text: 'İnsanların mutluluk paylaşımları moralimi bozar.', points: 10 },
                    { id: 't10_q4', text: 'Başarı postları beni strese sokar.', points: 10 },
                    { id: 't10_q5', text: 'Kendimi başkalarıyla karşılaştırırım.', points: 10 },
                    { id: 't10_q6', text: 'Herkesin hayatı daha iyi gibi gelir.', points: 10 },
                    { id: 't10_q7', text: 'Sosyal medyada gördüklerim özgüvenimi etkiler.', points: 10 },
                    { id: 't10_q8', text: 'Bazen kendimi geri kalmış hissederim.', points: 10 },
                    { id: 't10_q9', text: 'Görünüşümü başkalarıyla kıyaslarım.', points: 10 },
                    { id: 't10_q10', text: 'Sosyal medya ruh halimi etkiler.', points: 10 },
                ]
            },
            {
                id: 't11',
                topicId: '2',
                title: 'Pasif Agresif Story Uzmanı mısın?',
                description: 'Göndermeli paylaşımlar yapıyor musun?',
                questions: [
                    { id: 't11_q1', text: 'Story’lerim bazen birine mesaj içerir.', points: 10 },
                    { id: 't11_q2', text: 'Direkt söylemek yerine dolaylı paylaşım yaparım.', points: 10 },
                    { id: 't11_q3', text: '“Bazı insanlar…” diye başlayan paylaşımlar yaparım.', points: 10 },
                    { id: 't11_q4', text: 'Sinirliyken story atarım.', points: 10 },
                    { id: 't11_q5', text: 'Birine laf sokmak için paylaşım yaparım.', points: 10 },
                    { id: 't11_q6', text: 'Anlaşılmasını istediğim kişiye gönderme yaparım.', points: 10 },
                    { id: 't11_q7', text: 'Story ile mesaj vermek daha kolay gelir.', points: 10 },
                    { id: 't11_q8', text: 'İmalı şarkı sözleri paylaşırım.', points: 10 },
                    { id: 't11_q9', text: 'Birine sinirliyken sosyal medyada belli ederim.', points: 10 },
                    { id: 't11_q10', text: 'Tepkimi dolaylı yoldan gösteririm.', points: 10 },
                ]
            },
            {
                id: 't12',
                topicId: '2',
                title: 'Ego seviyen kaç?',
                description: 'İlgi odağı olmayı seviyor musun?',
                questions: [
                    { id: 't12_q1', text: 'İnsanların beni kıskanmasını isterim.', points: 10 },
                    { id: 't12_q2', text: 'İlgi odağı olmayı severim.', points: 10 },
                    { id: 't12_q3', text: 'Beğeni almak hoşuma gider.', points: 10 },
                    { id: 't12_q4', text: 'Takipçi sayım önemlidir.', points: 10 },
                    { id: 't12_q5', text: 'Profilimin etkileyici görünmesini isterim.', points: 10 },
                    { id: 't12_q6', text: 'İnsanların benim hakkımda konuşmasını isterim.', points: 10 },
                    { id: 't12_q7', text: 'Dışarıdan nasıl göründüğüm önemlidir.', points: 10 },
                    { id: 't12_q8', text: 'Sosyal medyada güçlü görünmek isterim.', points: 10 },
                    { id: 't12_q9', text: 'Takdir edilmediğimde rahatsız olurum.', points: 10 },
                    { id: 't12_q10', text: 'Görünür olmak benim için önemlidir.', points: 10 },
                ]
            }
        ]
    },
    {
        id: '3',
        title: 'ARKADAŞLIKTA TOKSİKLİK',
        color: '#4CD964', // Green
        image: '🤝',
        tests: [
            {
                id: 't13',
                topicId: '3',
                title: 'Arkadaş Çevrende Gizli Toksik Sen misin?',
                description: 'Bencillik mi korumacılık mı?',
                questions: [
                    { id: 't13_q1', text: 'En yakın arkadaşımın başkalarıyla fazla yakın olması beni rahatsız eder.', points: 10 },
                    { id: 't13_q2', text: 'En yakın arkadaşı benim olmam gerektiğini düşünürüm.', points: 10 },
                    { id: 't13_q3', text: 'Arkadaşım başkasıyla plan yapınca içerlerim.', points: 10 },
                    { id: 't13_q4', text: 'Bana anlatmadığı şeyler olursa kırılırım.', points: 10 },
                    { id: 't13_q5', text: 'En yakın arkadaşımın önceliği ben olmalıyım.', points: 10 },
                    { id: 't13_q6', text: 'Onu başkalarıyla paylaşmak zor gelir.', points: 10 },
                    { id: 't13_q7', text: 'Yeni arkadaşlarını sorgularım.', points: 10 },
                    { id: 't13_q8', text: 'Beni ikinci plana atıyormuş gibi hissederim.', points: 10 },
                    { id: 't13_q9', text: 'Sahiplenici olduğumu söylerler.', points: 10 },
                    { id: 't13_q10', text: 'Arkadaşlıkta özel bağımın ayrıcalıklı olmasını isterim.', points: 10 },
                ]
            },
            {
                id: 't14',
                topicId: '3',
                title: 'Kırılınca Hangi Karaktere Dönüşüyorsun?',
                description: 'Tepkin nasıl?',
                questions: [
                    { id: 't14_q1', text: 'Kırıldığımda hemen soğurum.', points: 10 },
                    { id: 't14_q2', text: 'Küslükleri uzatabilirim.', points: 10 },
                    { id: 't14_q3', text: '“Yok bir şey” deyip içimde tutarım.', points: 10 },
                    { id: 't14_q4', text: 'Özür gelmeden barışmam.', points: 10 },
                    { id: 't14_q5', text: 'İlk adımı atmam zor olur.', points: 10 },
                    { id: 't14_q6', text: 'Mesafe koyarak tepki veririm.', points: 10 },
                    { id: 't14_q7', text: 'Kırgınlığımı açıkça söylemem.', points: 10 },
                    { id: 't14_q8', text: 'Beni üzenleri kolay affetmem.', points: 10 },
                    { id: 't14_q9', text: 'Sessizliğimle mesaj veririm.', points: 10 },
                    { id: 't14_q10', text: 'Küslük sırasında karşı tarafın adım atmasını beklerim.', points: 10 },
                ]
            },
            {
                id: 't15',
                topicId: '3',
                title: 'Dedikodu Enerjin Kaç Volt?',
                description: 'Sır tutabilir misin?',
                questions: [
                    { id: 't15_q1', text: 'Duyduğum bilgileri paylaşma isteğim olur.', points: 10 },
                    { id: 't15_q2', text: 'Dedikodu ortamı ilgimi çeker.', points: 10 },
                    { id: 't15_q3', text: '“Aramızda kalsın” denilen şeyleri bazen anlatırım.', points: 10 },
                    { id: 't15_q4', text: 'Arkadaş grubunda haber taşıyıcı olurum.', points: 10 },
                    { id: 't15_q5', text: 'Birinin özel hayatını konuşmak sorun gelmez.', points: 10 },
                    { id: 't15_q6', text: 'Olayları abartarak anlatabilirim.', points: 10 },
                    { id: 't15_q7', text: 'Başkalarının ilişkilerini yorumlamayı severim.', points: 10 },
                    { id: 't15_q8', text: 'Drama içeren konular dikkatimi çeker.', points: 10 },
                    { id: 't15_q9', text: 'Gizli bilgileri merak ederim.', points: 10 },
                    { id: 't15_q10', text: 'Dedikodu sosyal bağ kurmanın bir yolu gibi gelir.', points: 10 },
                ]
            },
            {
                id: 't16',
                topicId: '3',
                title: 'Drama Queen misin?',
                description: 'Kaosu seviyor musun?',
                questions: [
                    { id: 't16_q1', text: 'Ortam çok sakinse sıkılırım.', points: 10 },
                    { id: 't16_q2', text: 'Küçük meseleleri büyütebilirim.', points: 10 },
                    { id: 't16_q3', text: 'Olayları dramatize ettiğim olur.', points: 10 },
                    { id: 't16_q4', text: 'Tartışmaların içinde bulurum kendimi.', points: 10 },
                    { id: 't16_q5', text: 'Arkadaş grubunda kriz çıkabilir.', points: 10 },
                    { id: 't16_q6', text: 'Duygularımı yoğun yaşarım.', points: 10 },
                    { id: 't16_q7', text: 'Bir olayın etkisini uzun süre taşırım.', points: 10 },
                    { id: 't16_q8', text: 'Sessiz kalmak yerine tepki veririm.', points: 10 },
                    { id: 't16_q9', text: 'Bazen gereksiz yere büyüttüğüm olur.', points: 10 },
                    { id: 't16_q10', text: 'Kaotik ortamlar bana tanıdık gelir.', points: 10 },
                ]
            },
            {
                id: 't17',
                topicId: '3',
                title: 'Hep Haklı Olan Arkadaş Sen misin?',
                description: 'İnatçılık seviyen?',
                questions: [
                    { id: 't17_q1', text: 'Hatalı olduğumu kabul etmek zor gelir.', points: 10 },
                    { id: 't17_q2', text: 'Tartışmalarda geri adım atmam.', points: 10 },
                    { id: 't17_q3', text: 'Özür dilemekte zorlanırım.', points: 10 },
                    { id: 't17_q4', text: 'Kendi bakış açımı savunurum.', points: 10 },
                    { id: 't17_q5', text: 'Eleştiriye karşı savunmaya geçerim.', points: 10 },
                    { id: 't17_q6', text: 'Yanlış anlaşıldığımı düşünürüm.', points: 10 },
                    { id: 't17_q7', text: 'Genelde haklı olduğuma inanırım.', points: 10 },
                    { id: 't17_q8', text: 'Fikrimi değiştirmek kolay değildir.', points: 10 },
                    { id: 't17_q9', text: 'Son sözü söylemek isterim.', points: 10 },
                    { id: 't17_q10', text: 'Tartışmalarda pes etmem.', points: 10 },
                ]
            },
            {
                id: 't18',
                topicId: '3',
                title: 'Yüzleşir misin, Uzaklaşır mısın?',
                description: 'Sorun çözme yöntemin?',
                questions: [
                    { id: 't18_q1', text: 'Kırıldığımda bir anda soğurum.', points: 10 },
                    { id: 't18_q2', text: 'İletişimi azaltarak tepki veririm.', points: 10 },
                    { id: 't18_q3', text: 'İnsanları hayatımdan sessizce çıkarırım.', points: 10 },
                    { id: 't18_q4', text: 'Birine kızdıysam davranışımla belli ederim.', points: 10 },
                    { id: 't18_q5', text: 'Mesafe koymak bana daha kolay gelir.', points: 10 },
                    { id: 't18_q6', text: 'Yüzleşmekten kaçınırım.', points: 10 },
                    { id: 't18_q7', text: 'İçimde biriktiririm.', points: 10 },
                    { id: 't18_q8', text: 'Duygularımı açıkça ifade etmem.', points: 10 },
                    { id: 't18_q9', text: 'Soğuk davranarak mesaj veririm.', points: 10 },
                    { id: 't18_q10', text: 'Birine kırıldıysam geri dönmem zor olur.', points: 10 },
                ]
            }
        ]
    },
    {
        id: '4',
        title: 'ÖFKE & AGRESYON',
        color: '#FF9500',
        image: '😡',
        tests: [
            {
                id: 't19',
                topicId: '4',
                title: 'Sinir Kontrolün Gerçekten Var mı?',
                description: 'Öfkeni kontrol edebiliyor musun yoksa o mu seni yönetiyor?',
                questions: [
                    { id: 't19_q1', text: 'Küçük şeyler bile sinirimi bozabilir.', points: 10 },
                    { id: 't19_q2', text: 'Sinirlendiğimde mantıklı düşünmekte zorlanırım.', points: 10 },
                    { id: 't19_q3', text: 'Tepkim bazen duruma göre fazla olabilir.', points: 10 },
                    { id: 't19_q4', text: 'Özür dilemek yerine haklılığımı savunurum.', points: 10 },
                    { id: 't19_q5', text: 'Sinirliyken ses tonum değişir.', points: 10 },
                    { id: 't19_q6', text: 'Sonradan “abarttım” dediğim olur.', points: 10 },
                    { id: 't19_q7', text: 'Biri beni eleştirince hemen savunmaya geçerim.', points: 10 },
                    { id: 't19_q8', text: 'Öfkemi bastırmakta zorlanırım.', points: 10 },
                    { id: 't19_q9', text: 'Sinirliyken kırıcı konuşabilirim.', points: 10 },
                    { id: 't19_q10', text: 'Tartışma sırasında geri adım atmam.', points: 10 },
                ]
            },
            {
                id: 't20',
                topicId: '4',
                title: 'Tartışmada Ne Kadar Yıkıcısın?',
                description: 'Tartışırken yakıp yıkıyor musun yoksa çözüm mü arıyorsun?',
                questions: [
                    { id: 't20_q1', text: 'Tartışma sırasında eski konuları açarım.', points: 10 },
                    { id: 't20_q2', text: 'Karşı tarafın zayıf noktalarını kullanabilirim.', points: 10 },
                    { id: 't20_q3', text: 'Haklı çıkmak benim için önemlidir.', points: 10 },
                    { id: 't20_q4', text: 'Tartışma büyüyebilir.', points: 10 },
                    { id: 't20_q5', text: 'Sinirliyken lafımı esirgemem.', points: 10 },
                    { id: 't20_q6', text: 'Karşı tarafı susturmaya çalışırım.', points: 10 },
                    { id: 't20_q7', text: 'Özür gelmeden yumuşamam.', points: 10 },
                    { id: 't20_q8', text: 'Alaycı konuşabilirim.', points: 10 },
                    { id: 't20_q9', text: 'Tartışmayı uzatırım.', points: 10 },
                    { id: 't20_q10', text: 'Son sözü söylemek isterim.', points: 10 },
                ]
            },
            {
                id: 't21',
                topicId: '4',
                title: 'İçten İçten Biriktiriyor musun?',
                description: 'Sessiz kalıp biriktiriyor musun?',
                questions: [
                    { id: 't21_q1', text: 'Sinirlendiğimde hemen söylemem.', points: 10 },
                    { id: 't21_q2', text: 'İçimde biriktirdiğim olur.', points: 10 },
                    { id: 't21_q3', text: 'Patlamam aniden olabilir.', points: 10 },
                    { id: 't21_q4', text: 'Uzun süre sabredip sonra tepki veririm.', points: 10 },
                    { id: 't21_q5', text: 'Kırıldığımı belli etmem.', points: 10 },
                    { id: 't21_q6', text: 'İnsanlar sinirlendiğimi anlamayabilir.', points: 10 },
                    { id: 't21_q7', text: 'Bastırdığım duygularım olabilir.', points: 10 },
                    { id: 't21_q8', text: 'Küçük şeyler birikince büyük tepki veririm.', points: 10 },
                    { id: 't21_q9', text: 'İçimde hesap tutarım.', points: 10 },
                    { id: 't21_q10', text: 'Yüzleşmekten kaçınırım.', points: 10 },
                ]
            },
            {
                id: 't22',
                topicId: '4',
                title: 'Suç Kimde Oyunu Oynuyor musun?',
                description: 'Sorumluluk alıyor musun yoksa hep başkalarını mı suçluyorsun?',
                questions: [
                    { id: 't22_q1', text: 'Sinirlendiğimde karşı tarafı suçlarım.', points: 10 },
                    { id: 't22_q2', text: 'Tepkimin sebebi genelde karşımdakidir.', points: 10 },
                    { id: 't22_q3', text: 'Özür dilemek yerine açıklama yaparım.', points: 10 },
                    { id: 't22_q4', text: '“Ben böyleyim” diyerek davranışımı savunurum.', points: 10 },
                    { id: 't22_q5', text: 'Eleştiriye karşı hassasım.', points: 10 },
                    { id: 't22_q6', text: 'Yanlış anlaşıldığımı düşünürüm.', points: 10 },
                    { id: 't22_q7', text: 'Haksız olduğumu kabul etmek zor gelir.', points: 10 },
                    { id: 't22_q8', text: 'Sorumluluk almak kolay değildir.', points: 10 },
                    { id: 't22_q9', text: 'Savunmaya hızlı geçerim.', points: 10 },
                    { id: 't22_q10', text: 'Tartışmada kendimi haklı görürüm.', points: 10 },
                ]
            },
            {
                id: 't23',
                topicId: '4',
                title: 'Ani Parlama Potansiyelin Kaç?',
                description: 'Barut fıçısı gibi misin?',
                questions: [
                    { id: 't23_q1', text: 'Tepkim bazen çok hızlı olur.', points: 10 },
                    { id: 't23_q2', text: 'Sinirliyken kelimelerimi filtrelemem.', points: 10 },
                    { id: 't23_q3', text: 'Duygularım mantığımın önüne geçer.', points: 10 },
                    { id: 't23_q4', text: 'Sonradan pişman olduğum şeyler söylerim.', points: 10 },
                    { id: 't23_q5', text: 'Kendimi tutmak zor olabilir.', points: 10 },
                    { id: 't23_q6', text: 'Anlık çıkışlarım olabilir.', points: 10 },
                    { id: 't23_q7', text: 'Gerilim beni tetikler.', points: 10 },
                    { id: 't23_q8', text: 'Sakin kalmak bilinçli çaba gerektirir.', points: 10 },
                    { id: 't23_q9', text: 'Öfkem yoğun olabilir.', points: 10 },
                    { id: 't23_q10', text: 'Duygusal iniş çıkışlarım vardır.', points: 10 },
                ]
            },
            {
                id: 't24',
                topicId: '4',
                title: 'Soğuk mu Sıcak mı Tepki Veriyorsun?',
                description: 'Öfkeni buz gibi sessizlikle mi yoksa alev alev mi yaşıyorsun?',
                questions: [
                    { id: 't24_q1', text: 'Sinirliyken mesafe koyarım.', points: 10 },
                    { id: 't24_q2', text: 'Tepkimi dolaylı yoldan gösteririm.', points: 10 },
                    { id: 't24_q3', text: 'Bazen sessizlikle cezalandırırım.', points: 10 },
                    { id: 't24_q4', text: 'Direkt yüzleşmek yerine geri çekilirim.', points: 10 },
                    { id: 't24_q5', text: 'Soğuk davranarak mesaj veririm.', points: 10 },
                    { id: 't24_q6', text: 'İçimde kızgınlık kalabilir.', points: 10 },
                    { id: 't24_q7', text: 'Açık açık konuşmak zor gelebilir.', points: 10 },
                    { id: 't24_q8', text: 'Tepkimi geciktiririm.', points: 10 },
                    { id: 't24_q9', text: 'Beni kızdıran şeyi hemen söylemem.', points: 10 },
                    { id: 't24_q10', text: 'Duygularımı direkt ifade etmekte zorlanırım.', points: 10 },
                ]
            }
        ]
    },
    {
        id: '5',
        title: 'PASİF-AGRESİF & GİZLİ TOKSİKLİK',
        color: '#9C27B0',
        image: '😶',
        tests: [
            {
                id: 't25',
                topicId: '5',
                title: 'Yok Bir Şey Deyip Her Şey Olanlardan mısın?',
                description: 'Duygularını gizliyor musun?',
                questions: [
                    { id: 't25_q1', text: 'Kırıldığımda “önemli değil” derim ama içimde kalır.', points: 10 },
                    { id: 't25_q2', text: 'Direkt söylemek yerine davranışımla belli ederim.', points: 10 },
                    { id: 't25_q3', text: 'Sinirliyken kısa cevaplar veririm.', points: 10 },
                    { id: 't25_q4', text: 'Beni anlamasını beklerim.', points: 10 },
                    { id: 't25_q5', text: 'Açık açık konuşmak zor gelir.', points: 10 },
                    { id: 't25_q6', text: 'Soğuyarak tepki veririm.', points: 10 },
                    { id: 't25_q7', text: 'Sorunları içimde büyütürüm.', points: 10 },
                    { id: 't25_q8', text: 'Karşı taraf anlamazsa daha da gerilirim.', points: 10 },
                    { id: 't25_q9', text: 'Mesafe koymak bana daha kolay gelir.', points: 10 },
                    { id: 't25_q10', text: 'Yüzleşmekten kaçınırım.', points: 10 },
                ]
            },
            {
                id: 't26',
                topicId: '5',
                title: 'Mesaj Görüldü, Cevap Yok Enerjisi?',
                description: 'Dijital sessizlikle cezalandırıyor musun?',
                questions: [
                    { id: 't26_q1', text: 'Bazen bilerek geç cevap veririm.', points: 10 },
                    { id: 't26_q2', text: 'Online olup yazmamayı seçtiğim olur.', points: 10 },
                    { id: 't26_q3', text: 'Cevap süresiyle mesaj veririm.', points: 10 },
                    { id: 't26_q4', text: 'Sinirliysem mesajları bekletirim.', points: 10 },
                    { id: 't26_q5', text: 'Mesaj atmamak bir tepki biçimidir.', points: 10 },
                    { id: 't26_q6', text: 'Kısa ve net cevaplarla soğukluk gösterebilirim.', points: 10 },
                    { id: 't26_q7', text: 'Yazışma tarzım ruh halime göre değişir.', points: 10 },
                    { id: 't26_q8', text: 'Mesajla mesafe koyarım.', points: 10 },
                    { id: 't26_q9', text: 'Tepkimi iletişimi azaltarak gösteririm.', points: 10 },
                    { id: 't26_q10', text: 'Görmezden gelmek bazen işe yarar.', points: 10 },
                ]
            },
            {
                id: 't27',
                topicId: '5',
                title: 'İmalı Cümle Profesörü müsün?',
                description: 'Açık konuşmak zor mu geliyor?',
                questions: [
                    { id: 't27_q1', text: 'Direkt söylemek yerine ima ederim.', points: 10 },
                    { id: 't27_q2', text: '“Bazı insanlar…” diye başlayan cümleler kurarım.', points: 10 },
                    { id: 't27_q3', text: 'Laf sokma eğilimim olabilir.', points: 10 },
                    { id: 't27_q4', text: 'Şaka adı altında mesaj veririm.', points: 10 },
                    { id: 't27_q5', text: 'Karşı tarafın anlamasını beklerim.', points: 10 },
                    { id: 't27_q6', text: 'Üstü kapalı eleştiririm.', points: 10 },
                    { id: 't27_q7', text: 'Açıkça söylemek yerine dolandırırım.', points: 10 },
                    { id: 't27_q8', text: 'İmalı konuşmak daha güvenli gelir.', points: 10 },
                    { id: 't27_q9', text: 'Sözlerimde gizli mesaj olabilir.', points: 10 },
                    { id: 't27_q10', text: 'Bazen pasif agresif olduğumu düşünürüm.', points: 10 },
                ]
            },
            {
                id: 't28',
                topicId: '5',
                title: 'Soğuk Yaparak Mesaj Verenlerden misin?',
                description: 'Buz gibi duvarlar örüyor musun?',
                questions: [
                    { id: 't28_q1', text: 'Kızdığım kişiye karşı soğuk davranırım.', points: 10 },
                    { id: 't28_q2', text: 'Enerjimi düşürerek tepki veririm.', points: 10 },
                    { id: 't28_q3', text: 'Fiziksel olarak ortamdan uzaklaşırım.', points: 10 },
                    { id: 't28_q4', text: 'İlgiyi kesmek bir cezadır.', points: 10 },
                    { id: 't28_q5', text: 'Sessizlikle baskı kurarım.', points: 10 },
                    { id: 't28_q6', text: 'Yüz ifademle mesaj veririm.', points: 10 },
                    { id: 't28_q7', text: 'Konuşmamı azaltırım.', points: 10 },
                    { id: 't28_q8', text: 'Mesafe koyarak kontrol sağlamaya çalışırım.', points: 10 },
                    { id: 't28_q9', text: 'Soğuk davranışım bilinçlidir.', points: 10 },
                    { id: 't28_q10', text: 'Beni kıran kişiye sıcak davranmam.', points: 10 },
                ]
            },
            {
                id: 't29',
                topicId: '5',
                title: 'İçten İçten Hesap Tutanlardan mısın?',
                description: 'Kin tutuyor musun?',
                questions: [
                    { id: 't29_q1', text: 'Yapılanları kolay unutmam.', points: 10 },
                    { id: 't29_q2', text: 'İçimde liste tutarım.', points: 10 },
                    { id: 't29_q3', text: 'Biriktirip sonra hatırlatırım.', points: 10 },
                    { id: 't29_q4', text: 'Hesap sormayı geciktirebilirim.', points: 10 },
                    { id: 't29_q5', text: 'O an tepki vermem ama not alırım.', points: 10 },
                    { id: 't29_q6', text: 'Affetsem bile hafızamda kalır.', points: 10 },
                    { id: 't29_q7', text: 'Güven kırıldığında mesafe koyarım.', points: 10 },
                    { id: 't29_q8', text: '“Sırası gelince konuşuruz” diye düşünürüm.', points: 10 },
                    { id: 't29_q9', text: 'Sabırlı ama unutkan değilimdir.', points: 10 },
                    { id: 't29_q10', text: 'İçimde kalan şeyler zamanla büyür.', points: 10 },
                ]
            },
            {
                id: 't30',
                topicId: '5',
                title: 'Masum Görünümlü Manipülatör mü?',
                description: 'Gizli oyunlar oynuyor musun?',
                questions: [
                    { id: 't30_q1', text: 'İstediğimi direkt söylemem.', points: 10 },
                    { id: 't30_q2', text: 'Karşı tarafın suçluluk hissetmesini sağlayabilirim.', points: 10 },
                    { id: 't30_q3', text: 'Mağdur gibi görünmek işime yarayabilir.', points: 10 },
                    { id: 't30_q4', text: 'Duygusal sessizlik kullanırım.', points: 10 },
                    { id: 't30_q5', text: 'Açık çatışma yerine dolaylı yolları seçerim.', points: 10 },
                    { id: 't30_q6', text: 'Tepkimi ince ince gösteririm.', points: 10 },
                    { id: 't30_q7', text: 'Beni anlamasını beklerim ama söylemem.', points: 10 },
                    { id: 't30_q8', text: 'Direkt yüzleşmek riskli gelir.', points: 10 },
                    { id: 't30_q9', text: 'Davranışımla yönlendirebilirim.', points: 10 },
                    { id: 't30_q10', text: 'Bazen farkında olmadan manipülatif olabilirim.', points: 10 },
                ]
            }
        ]
    }
];
