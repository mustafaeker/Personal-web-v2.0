  

Vue.component('tools', {
    
props: ['name'],

template: ` <div class="techs">
            <img class="tech-logo" :src="'img/logo/'+name+'.png'">
            </div>`,
 });

new Vue({
el:'#techs-container',
data: {
    tools:[
        { id: 1, name: 'jquery'},
        { id: 2, name: 'vue'},
        { id: 3, name: 'git'},
        { id: 4, name: 'chrome'},
        { id: 5, name: 'bootstrap'},
        { id: 6, name: 'node'},
        { id: 7, name: 'mongodb'},
        { id: 8, name: 'npm'},
        { id: 9, name: 'sass'},
        { id: 10, name: 'typescript'},
        { id: 11, name: 'json'},
            ]

}
});

/***********************************************************/

Vue.component('portfolio', {
    
props: ['name', 'no', 'description'],
    
template:`<div class="thumb"> 
            <button  type="button"  class="btn" data-toggle="modal" :data-target="'#port-img-'+no" style="background-color:#f9f6f6; padding:5px">
                <img class="thumb-image" :src="'img/gallery/'+no+'.jpg'">
            </button>

            <div class="modal fade" :id="'port-img-'+no" role="dialog">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header" style="color:#333333">
                            <h4 class="modal-title" >{{ name }}
                            <small> {{ description }}</small></h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <img :src="'img/gallery/'+no+'.jpg'" style="width: 100%">
                        </div>
                    </div>
                </div>
            </div>
        </div>`,
 });

new Vue({
el:'#portfolio-inner',
data: {
    visuals:[
        { id: 1,  name: 'NameHere', description: 'DescriptionHere'},
        { id: 2,  name: 'NameHere', description: 'DescriptionHere'},
        { id: 3,  name: 'NameHere', description: 'DescriptionHere'},
        { id: 4,  name: 'NameHere', description: 'DescriptionHere'},
        { id: 5,  name: 'NameHere', description: 'DescriptionHere'},
        { id: 6,  name: 'NameHere', description: 'DescriptionHere'},
        { id: 7,  name: 'NameHere', description: 'DescriptionHere'},
        { id: 8,  name: 'NameHere', description: 'DescriptionHere'},
        { id: 9,  name: 'NameHere', description: 'DescriptionHere'},
        { id: 10, name: 'NameHere', description: 'DescriptionHere'},
        { id: 11, name: 'NameHere', description: 'DescriptionHere'},
        { id: 12, name: 'NameHere', description: 'DescriptionHere'},
        { id: 13, name: 'NameHere', description: 'DescriptionHere'},
        { id: 14, name: 'NameHere', description: 'DescriptionHere'},
        { id: 15, name: 'NameHere', description: 'DescriptionHere'},
        { id: 16, name: 'NameHere', description: 'DescriptionHere'},
        { id: 17, name: 'NameHere', description: 'DescriptionHere'},
        { id: 18, name: 'NameHere', description: 'DescriptionHere'},
        { id: 19, name: 'NameHere', description: 'DescriptionHere'},
        { id: 20, name: 'NameHere', description: 'DescriptionHere'},
             ]

}
});

/***********************************************************/

Vue.component('experience', {
    
props: ['color','location', 'period', 'position', 'firm', 'description'],
    
template:`<div class="container"> 
            <div class="row justify-content-center">
                <div :class="'exp col-md col-lg-5 col-xl-4 p-0 m-0 text-right p-2 bg-'+color+' rounded-left'">
                    <p class="mb-1 p-0">{{period}}<br>
                    <em>{{location}}</em></p>
                </div>
                <div class="exp col-md col-lg-5 col-xl-4 p-0 m-0 text-left p-2">
                    <p class="mb-1 p-0"><strong>{{position}}</strong></p>
                    <p class="m-0 p-0">{{firm}}</p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-10 col-xl-8 p-0 m-0 ">
                    <p class=" text-muted text-justify"><small>{{description}}</small></p>
                </div>
            </div>
        </div>`,
 });

new Vue({
el:'#Experience',
data: {
    exps:[
        { id: 1, 
         color:'warning', 
         location:'Ankara, Turkey', 
         period:'05/2015 - ', 
         position:'General Manager', 
         firm:'Tempo Tic. Taah. ve İnş.', 
         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio fuga eveniet voluptatum, porro expedita id adipisci maiores, veniam quae, commodi atque. Optio pariatur ad earum repudiandae, ipsam, iure dolorum, ipsum ut itaque qui quasi voluptatibus alias. Aliquam necessitatibus quasi, beatae corporis aliquid totam vitae, fuga asperiores perspiciatis iusto suscipit reiciendis?'},
        { id: 2, 
         color:'warning',
         location:'Istanbul - Ankara, Turkey', 
         period:'10/2013 - 05/2015', 
         position:'Man Section Manager', 
         firm:'Inditex | ZARA', 
         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio fuga eveniet voluptatum, porro expedita id adipisci maiores, veniam quae, commodi atque. Optio pariatur ad earum repudiandae, ipsam, '},
        { id: 3, 
         color:'success',
         location:'Konya-Ankara, Turkey', 
         period:'02/2013 - 10/2013', 
         position:'Co-Founder | 3D Artist', 
         firm:'do.lab Imagineering Company', 
         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio fuga eveniet voluptatum, porro expedita id adipisci maiores, veniam quae, commodi atque. Optio pariatur ad earum repudiandae, ipsam,'},
        { id: 4, 
         color:'success',
         location:'Ankara, Turkey', 
         period:'05/2013 - 08/2013', 
         position:'3D Modeller/Artist', 
         firm:'Simsoft Bilg. Tek. Ltd Şti.', 
         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio fuga eveniet voluptatum, porro expedita id adipisci maiores, veniam quae, commodi atque. Optio pariatur ad earum repudiandae, ipsam,'},
        { id: 5, 
         color:'info',
         location:'Konya, Turkey', 
         period:'11/2012 - 09/2013', 
         position:'Web Design | 3D Arch-Viz', 
         firm:'Freelance', 
         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio fuga eveniet voluptatum, porro expedita id adipisci maiores, veniam quae, commodi atque. Optio pariatur ad earum repudiandae, ipsam,'},
        { id: 7, 
         color:'danger',
         location:'Konya, Turkey', 
         period:'09/2011 - 05/2013', 
         position:'City Planner', 
         firm:'Konya Provincial Disaster and Emergency Directorate', 
         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio fuga eveniet voluptatum, porro expedita id adipisci maiores, veniam quae, commodi atque. Optio pariatur ad earum repudiandae, ipsam,'},
        { id: 8, 
         color:'danger',
         location:'Canakkale, Turkey', 
         period:'01/2011 - 08/2011', 
         position:'City Planner', 
         firm:'Canakkale Provincial Spacial Administration', 
         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio fuga eveniet voluptatum, porro expedita id adipisci maiores, veniam quae, commodi atque. Optio pariatur ad earum repudiandae, ipsam,'},
        { id: 9, 
         color:'success',
         location:'Ankara - Canakkale, Turkey', 
         period:'07/2010 - 01/2011', 
         position:'City Planning | 3D Arc-Viz', 
         firm:'Freelance', 
         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio fuga eveniet voluptatum, porro expedita id adipisci maiores, veniam quae, commodi atque. Optio pariatur ad earum repudiandae, ipsam,'},
        { id: 10, 
         color:'warning',
         location:'Ankara, Turkey', 
         period:'08/2009 - 05/2010', 
         position:'Project Manager', 
         firm:'Tempo Tic. Taah. ve İnş.', 
         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio fuga eveniet voluptatum, porro expedita id adipisci maiores, veniam quae, commodi atque. Optio pariatur ad earum repudiandae, ipsam,'},
        { id: 11, 
         color:'secondary',
         location:'Ankara, Turkey', 
         period:'11/2008 - 06/2009', 
         position:'Millitary Service', 
         firm:'Turkish Armed Forces', 
         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio fuga eveniet voluptatum, porro expedita id adipisci maiores, veniam quae, commodi atque. Optio pariatur ad earum repudiandae, ipsam,'},
        { id: 12, 
         color:'info',
         location:'Ankara, Turkey', 
         period:'07/2008 - 11/2008', 
         position:'Web Design | Graphic Design', 
         firm:'Tempo Tic. Taah. ve İnş.', 
         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio fuga eveniet voluptatum, porro expedita id adipisci maiores, veniam quae, commodi atque. Optio pariatur ad earum repudiandae, ipsam,'},
        { id: 13, 
         color:'success',
         location:'Ankara, Turkey', 
         period:'01/2008 - 03/2008', 
         position:'3D Arch-Viz (Part-Time)', 
         firm:'3B Mimarlık', 
         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio fuga eveniet voluptatum, porro expedita id adipisci maiores, veniam quae, commodi atque. Optio pariatur ad earum repudiandae, ipsam,'},
        { id: 14, 
         color:'light',
         location:'Ankara, Turkey', 
         period:'06/2006 - 09/2006', 
         position:'Project Assistant', 
         firm:'Tempo Tic. Taah. ve İnş.', 
         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio fuga eveniet voluptatum, porro expedita id adipisci maiores, veniam quae, commodi atque. Optio pariatur ad earum repudiandae, ipsam,'},
        { id: 15, 
         color:'light',
         location:'Ankara, Turkey', 
         period:'Summer of .98-.01', 
         position:'Ceramic Craftsman', 
         firm:'Goridon Seramik', 
         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio fuga eveniet voluptatum, porro expedita id adipisci maiores, veniam quae, commodi atque. Optio pariatur ad earum repudiandae, ipsam,'},
        

             ]

}
});

/***********************************************************/

Vue.component('education', {
    
props: ['logo','name', 'period', 'department', 'faculty', 'description'],
    
template:`
<div class="wrapper">
<div class="row justify-content-md-center">
    <div class="col-md col-lg-5 col-xl-4 p-0 m-0 ">
        <div class="row">
            <div class="col-md-2 p-0 m-0">
            <img class="edu-icon" :src="'img/'+logo+'.jpg'" alt="">
            </div>
            <div class="col-md-10 p-0 m-0">
            <p class="mt-2 ml-2">{{name}}<br>
            <em>{{period}}</em></p>
            </div>
        </div>
    </div>
    <div class="col-md col-lg-5 col-xl-4 m-0 bg-dark text-light pl-4 pt-2 bg-light rounded-right">
        <p class="mb-1 p-0"><strong>{{department}}</strong></p>
        <p class="m-0 p-0">{{faculty}}</p>
    </div>
</div>
<div class="row justify-content-md-center">
<div class="col-md-12 col-lg-10 col-xl-8 p-0 m-0 ">
    <p class="text-muted text-justify"><small>{{description}}</small></p>
</div>
</div>
</div>
`
 });

new Vue({
el:'#Education',
data: {
    edus:[
        { id: 1, 
         logo:'metu', 
         name:'Middle East Technical University', 
         period:'2012 - 2014 (Left At Thesis Stage)', 
         department:'Game Technologies Master Program', 
         faculty:'INFORMATICS INSTITUTE', 
         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio fuga eveniet voluptatum, porro expedita id adipisci maiores, veniam quae, commodi atque. Optio pariatur ad earum repudiandae, ipsam, iure dolorum, ipsum ut itaque qui quasi voluptatibus alias. Aliquam necessitatibus quasi, beatae corporis aliquid totam vitae, fuga asperiores perspiciatis iusto suscipit reiciendis?'},
        { id: 2, 
         logo:'metu', 
         name:'Middle East Technical University', 
         period:'2004-2008', 
         department:'City and Regional Planning', 
         faculty:'FACULTY OF ARCHITECTURE', 
         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio fuga eveniet voluptatum, porro expedita id adipisci maiores, veniam quae, commodi atque. Optio pariatur ad earum repudiandae, ipsam, iure dolorum, ipsum ut itaque qui quasi voluptatibus alias. Aliquam necessitatibus quasi, beatae corporis aliquid totam vitae, fuga asperiores perspiciatis iusto suscipit reiciendis?'},
        { id: 3, 
         logo:'ybal', 
         name:'Yıldırım Beyazıt Anatolian High School', 
         period:'1997-2004', 
         department:'Science', 
         faculty:' ', 
         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio fuga eveniet voluptatum, porro expedita id adipisci maiores, veniam quae, commodi atque. Optio pariatur ad earum repudiandae, ipsam, iure dolorum, ipsum ut itaque qui quasi voluptatibus alias. Aliquam necessitatibus quasi, beatae corporis aliquid totam vitae, fuga asperiores perspiciatis iusto suscipit reiciendis?'},
             ]

}
});

/***********************************************************/

Vue.component('certificate', {
    
props: ['inst','date', 'licence', 'name', 'link'],
    
template:`
<div class="row justify-content-md-center">
        <div class="col-6 text-right p-2 ">
            <p class="mb-1 p-0"><strong>{{inst}}</strong><br>{{date}}<br>
            <em>{{licence}}</em></p>
        </div>
        <div class="col-6 text-left p-2 ">
            <p class="mb-1 p-0">{{name}}</p>
            <a class="cert-link" :href="link">
            <p class="m-0 p-0">View Licence...</p></a>
        </div>
</div>
`
 });

new Vue({
el:'#Certificates',
data: {
    certs:[
        { id: 1, 
         inst:'Udemy', 
         date:'07/2018', 
         licence:'Licence: UC-QXW4MG9N', 
         name:'Komple Sıfırdan Adım Adım Javascript Öğrenin', 
         link:'https://www.udemy.com/certificate/UC-QXW4MG9N/'},
        
        { id: 2, 
         inst:'Udemy', 
         date:'06/2018', 
         licence:'Licence: c7c332a0-7ab1-11e8-8ac1-2bf7a4cef6b0', 
         name:'Programlamanın Temelleri',          link:'https://bilgeis.net/moodle/mod/simplecertificate/view.php?id=2508&tab=0&page=0&perpage=30&orderby=username&action=get'},
        
        { id: 3, 
         inst:'Udemy', 
         date:'06/2018', 
         licence:'Licence: UC-Q21DNL7A', 
         name:'Web Geliştiricisi Olmanın Temelleri', 
         link:'https://www.udemy.com/certificate/UC-Q21DNL7A/'},
        
        { id: 4, 
         inst:'Başarsoft', 
         date:'03/2012', 
         licence:'Licence: ', 
         name:'Mapinfo Professional Essential & Advanced Degree Training', 
         link:' '},
             ]

}
});

/***********************************************************/

Vue.component('award', {
    
props: ['degree','inst','date', 'name', 'subtitle', 'link', 'linkdesc', 'page', 'pagedesc','info'],
    
template:`
<div class="container my-5">
<h4><strong>{{degree}}</strong></h4>
        <p class="text-muted text-center m-0"><small>{{subtitle}}</small></p> 
        <a class="cert-link" :href="page" >{{pagedesc}}</a>
    <div class="row justify-content-center">
        <div class="col-4 text-right p-2 ">
            <p class="m-0 p-0">{{inst}}<br><em>{{date}}</em></p>
        </div>
        <div class="col-4 text-left pt-2 ">
            <p class="mb-1 p-0">{{name}}</p>
        </div>
    </div>
    <div class="row justify-content-md-center">
        <div class="col text-center ">
            <a class="cert-link" :href="link" >{{linkdesc}}</a>
            <p class="text-muted text-center m-0"><small>{{info}}</small></p> 
        </div>
    </div>
</div>
`
 });

new Vue({
el:'#Awards',
data: {
    awards:[
        {id: 1, 
         degree:'1st Place',
         inst:'Gate Ms. Program', 
         date:'01/2013', 
         name:'Gateway 2013 Game Development Competition', 
         subtitle:'PC Game - Alaturka Karting', 
         page:'#', 
         pagedesc:"Visit Game's Page", 
         link:'http://gate.ii.metu.edu.tr/tr/gateway-0', 
         linkdesc:'GATEWay 2013', 
         info:' '
        },
        
        {id: 2, 
         degree:'3rd Place',
         inst:'TMMOB', 
         date:'06/2008', 
         name:'Zonguldak Lavuar Alanı Değerlendirme Projesi Ulusal Fikir Yarışması', 
         page:'#', 
         pagedesc:"View Project", 
         subtitle:'Zonguldak Gençlik Merkezi ve Kent Müzesi', 
         link:'http://v3.arkitera.com/y779-kent-dusleri---3-zonguldak-merkez-lavuar-alani-degerlendirme-projesi.html', 
         linkdesc:'Winners List', 
         info:' '
        },
        
        
        {id: 3, 
         degree:'Mention',
         inst:'METU (Faculty of Arch.)', 
         date:'12/2007', 
         name:'Mimarlık Fakültesi - Kuzey Avlu Tasarimi Projesi', 
         page:'#', 
         pagedesc:"View Project",  
         subtitle:'Kuzey Avlu Japon Bahçesi', 
         link:' ', 
         linkdesc:'', 
         info:'Copmpetition Link Removed by Instution '
        },
        
        {id: 4, 
         degree:'2nd Place',
         inst:'TMMOB', 
         date:'11/2007', 
         name:'Hasanoğlan Y. Köy Enstitüsü Değerlendirme Projesi Ulusal Fikir Yarışması', 
         page:'#', 
         pagedesc:"View Project",  
         subtitle:'Hasanoğlan Eğitim Yerleşkesi', 
         link:'http://v3.arkitera.com/y779-kent-dusleri---3-zonguldak-merkez-lavuar-alani-degerlendirme-projesi.html', 
         linkdesc:'Winners List', 
         info:' '
        },
             ]

}
});

