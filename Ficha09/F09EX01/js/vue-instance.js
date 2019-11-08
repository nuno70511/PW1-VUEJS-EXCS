Vue.component("game-soccer-card", {
    props: ["game"],
    template:
    `
        <div class='col-sm-4'>
            <div class="card" style="width: 18rem;">
                <img :src="game.stadiumLink" class="card-img-top">
                <div class="card-body">
                    <h3 class="card-title">
                        {{ game.stadiumName }}
                    </h3>
                    <h5>
                        {{ getResult(game) }}
                    </h5>
                    <p class="card-text" v-for="goal in game.goals">
                        {{ goal.minute }}' {{ goal.player }}
                    </p>
                </div>
            </div>
        </div>
    `,
    methods: {
        getResult(game) {
            let goalsHome, goalsAway;

            goalsHome = game.goals.filter(goal => game.teamHome === goal.team).length;

            goalsAway = game.goals.filter(goal => game.teamAway === goal.team).length;

            return `${game.teamHome} ${goalsHome} - ${goalsAway} ${game.teamAway}`;
        }
    }
});

const vm = new Vue({
    el: "#app",
    data: {
        games: []
    },
    created() {
        this.games = [
            {
                id: 1,
                date: "12-12-2019",
                stadiumName: "Estádio do Varzim SC",
                stadiumLink: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMWFRUXGBYYFxYXFRgXGhcXFRYXFxgVFRYaHSggGBolHRgXITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHyUtLSstLS0rLS0tLS8tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tNf/AABEIALcBFAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAQIEBQYABwj/xABHEAABAwEFAwkECAUCBAcAAAABAAIRAwQSITFBBVFhBhMicYGRocHwMlKx0QcUI0JicsLhU4KSsvEVMyRDRIMXY3STotLy/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QALREAAgIBAwMCBQMFAAAAAAAAAAECERIDIVETMUEEIhRhcYGRUqHwMkKxwdH/2gAMAwEAAhEDEQA/APVDSScyVKupYXZkYYkUUil5kqVKVLNjxREFIp4pKQlDUnNgokc0k00lOFNQdpW3mi0AAzOEx95gw7zoUuoViJzR3JOaXbP2sytk1wkkCRmQQDHafBWJpo6gYFaGbwiNaNylmikbRTzQsWADE4UwpAprjTU5jxAFijubiptxNcxNSBohOpymmgpZakulVkTREZQhSQUS6V0JOVjSAvqAD9lHfbANPAqYQuDEWg3Kqvbw7AiRIOuYMhQnW05iAcAXDMxGZ1yWiNEHNo7lGfs9p+6mpQ4E4y5KJ20qnvHtxQ3W5xz+avv9MZ7qb/prBoqziicJGddWnXyTC1aM2BmoTHbPZPcn1ULpsz/MEpDZjuV8bA0ZT3z8U4WWNe8f4T6oumZ9tLeEjqUq5qWXqUZ9Jo/YozDAq3UCNEvNHcrKRo09eHzTHgDOe5GYsCEKC5Gvt4+K5Kwo3ACfdTQQnghczOkYaSTmkVdCLCgYpJ0JYXXUWFHKh2taAHG85sNDjDxPvHURGA7uxX11UHK2wN+q2moL4dzVQ4VHgewR7M3fBIAPJVnQoy1s821xLTqWSZHWtQqnZOyRSIffc4ljR0gwQIGRa0E9qtgUhiwkhdeXXkhiQkTpXJ2IZKWE6F0IsBhaE24irkZBQJzENzSpKSE1IKIqeBwRSwJj07sVUDkphfEynEKLVbji7sVJWS2SGVZTalcBRXPaNT681HqV28T6+KpQFmTDaGqO+1Nvad6i1XtukjSYk6+Sordb6jQXwA0Mv4QSRInXd8UpYR7gspdjSm1BCfW4H11qgsW2Wuht6H4AgjMwiN262454MhgBMNxxcG6gakIyh3tCqXBaPJOg7Z80MsdvA7FX2HlA2q4NbeBIJEgAQOokqfzrt6uLvsS9u4x1FxzeUM2Mbz3+pR+f4evW9KLVwT3FsRvqTd3xPwXKXzw3LkrY6RqS1IiSkhYWb0MlKHJ11LCLQqY0FOldC6EhiyqXlo+LDaeNNw/qw81cws/y8j6jVBJAJpt6MTjVYMJwQDL8ZBJKcUhCYmNJKaSURNhMQOSuvFEupt1OxUJfKcKiS6uuo2DcdfXc4m3VxalSHbFNVNNTioO0be2l7WQAJMwAHG6O8qmtfKem2brQ6BJ6X4yyBhvHdCWUEFSNIag3pjncVB2Tb2Whgc0i9AvNmbszE4cFMNELRYkOwbxxUSrTxzU40kOpTy9aK1ImivfQ9eSYylB9kv8AwgxJ61Pc3180C0MkEXb2GUxhxMHBLUm8H9Bwj7kVFS2hrKbgBN97XEgiQWuMSQLwAIE4YjNZvatqDiRdD/sX4AP6EOZJkjF0FXtoMU6GLvbdBMNHsR9niyG48NVD2+2Seix92hUPRMCmS6l0jibz+G9ePGW56MlsYqnaSCwtMdI9eitqh6BGGmGG/r8j1hUz/aZ+Y/EZqxfWM3SYBGQOcGcccddD2ZrRozTLLky08/judprhPxWuELKcnWzVP5X/ANzcvXctIWFel6dew4tZ+4MY9eoXEhRywplw+v2W1GWRJMeo80ijQd/rsCRFBkbXnUoqpxpJOaXPcToqQoqp4qBDNJJzRSqIXJB5XSg3CuulKkPJ8BpWd5fO/wCFA96tQGU/8wHyV6CdyzXL1/2NARnaaIzI94+hqigs1ZKSVk+UHLZljqGnWoVt7XNuEPG9pLh2jTuVY36V7J/Crj+Vh/WptD3N+kWB/wDFOxHSuP5G/wD2Tm/ShYPeqj/tHyVbcibfBu10LDt+lDZ38Z466NTyais+krZp/wCp76VUfoT25FfyNlCVZNv0g7OOVqZ2h4+LUo5f7PP/AFVLteB8Sk6BP5GqlJfWOPL6zFxDa1nI0+3bKNZeWVBzw1z6YaQTfbUDhOgwSyiVuV/LE9GviJ6Pu+/1k/BZanr1O3fxFe8pbbTqMq3HghxbEHPpnQN+OPWqKiM88nb/AOK5c/JobH6P4+2/7f6lrywLG8g3QyudZaAN5DXmPBal1raxl6p0TuhxE6AOIAK1hNJEOLYY0uKFVpYZ7lXW7bokU6TCXOJAcfYBESC7LCRuzVfX23aGlwLGG7xzIwIzwGZlV1kLpl29rvXrJR7Uw3TLWkbnGB3wctyiWHb4IJrAUoiIl0jGTgNMEy17dpGm66WvMNhpDoJOcYYFuBRqaqcGghpvJMgWt8Ns+LsS8guN290W+xD2wNwnfgVA5QyXPBY1wbQOLHABpNSn/uNmSYjSCTwQ6+1TFMweheB6byXXroORBA6OWIxyVbtTaQq1HdC7NKGtaSIh7HS9oHS7fJcChJM7G0UDvap9bviOtTXe3npv4/m+fmojqZDqcgx0sxljvUwul854DHHXQ6ab9FoZl5yVZ9q/H7p/uGi1PNjf64LOcjWXqlTg3fvctS6h6+YXfoP2HHqr3AHU0F7CpBp+v3TSw+vktrM6Ihp+vRSo+Jyx6sVyMhUfPlh5VWyj/t2mu2NOddH9Mx4LR7O+lraVPOsyqN1Sm0+LQ0+Kwf1c70vMO9FcGx10z2Cw/ThUEc7ZGO3llRzPBwctHs/6ZbA/CoytSO8sDx2XHE+C8Ep7PeReGSe2yOH3Snl8xbn1FsXlhYrW4MoWhj3kE3Ok10DM3XAFXZcvmnYfLK22PCiKTRuNlpDvcxrXHvWnsX0x2sYVLPQqH8N+mY7S7FUpINz3C8sn9IRllkG+2Wb+5Zqy/TJRMc5ZKzZ9xzHjj7V1XHK63tr09mVWTdq2qzPbOBh0OEjfirtC3NFyp2Ky22d9JwF7Om6JLHjJw4aEagleW0Po5fUbfbaGw5xaJpEZGLx6eRM48AdV63te3CjRfUP3RhxJwA74WX2btKvToNaKRBAwF4OAGMTGWiiWN7lLKjF1fovrdL/iKZu59BwkcMd2PZCg2z6MrQwD7agb2Ilzm9ebc9e1bS08uazJmkJGEXtTAH3d/wAUO1cuHuBHNxn95p8CxFRFkzyS07CrNaXkYA3T7Uz1Xd8DtTf9Br4t5skgXsnZdo7Oxam3VsIuB14jIHQz7ycamGNNpw0DuOXSUblWjI2fYddzQ8MgOyJcBPHHT5LjsKrj7PRz+1p9WHSxWsstqBaPsmwMpB0wORwTTSYZ+wpY541PmluP2mPOyas3buOftNOHXO5c7Y9WJuGN+B+BWtebhc+6Bui9hDQI8PBEoVWva0xhMjpOEGf8obYJKzEu2ZUBjmzOvRyTfqlRv3XjX2SMN63dRgM4AzAIJPVnnkhmmMDdIgCOlIAnHAjd8UZMdR5MXRq1xk+q0ZyC8dvj4qS232kQOdricQOcqDLC8cfFaewMYaREEi70fYzLpDDIvGG4ZxgFeWStRDntD3SabQS0tEG6ZZpAl09iTkCSZgnbatIE8/UzxJeTJG6UQcqbZONd51MkHXUkLfbZfTNnotYS5zXuloiB0GtDmgYjI96x1rsYL71yoZicJByzEITsGqADlRacZqkyccG9zcFNs+27VF4luG9g1jD/AColj2YXBshweXajIEuJInXD4Kw2jVDWXGmMJg5ReGJ4pSY4l+LYSw4tJDcTdzcZ0O6fAJjarBVN6fZiQ6DlTykGfBBFU3X9I5NGLYS2xzRUOLQSwT0fa6RHYYAWd+0v+4lPrNq0282SC4km/GAbEAhuWM46yozWnnMYkRlx3dHzGWqHsxssY0ODejoMW5HMjFPaPtCOrdjx3+Gvek9htbml5Gt6VQ/hb4l2fctW0YOcTAa0uJxOAzIjNYewWt9GkXMNNriYvOa9xIAcYhvrNabbZrtZTFEvF4G/FF1UmGggFrQYxnE7wtV6jGOKW5n0Mnk2Tq1QNLgTdIZebLfaME3cc4w7+qctR5TVq5usomHh7DTu9FvQcRUFaAGmTkQfZGOKsrBsu3c8H1nvfTvS1gpsaMj7TovD5pOUGya9R7brLVd5siKNRrBeJwc4ueJPBZS1Jye6/wA/8NlpwS2f8/JjNoWJ9F5Y93NuGbS4d4xxHFcpu0OSNqqPvMstoc0gYvtFOTvwLiQEirKfAsIcnlJsVmiecqkbwxpjuKkWajZ24io90R/yw7IzjB7FI+o0Rj05B3t+Sc6z0NWkkDMvjfwXVgcmQBjKQBu13wZxFPKSw6O/D4lLAjC11RgINx0CIy6fA96MW2cfdEgZmo6dcM0RlShmGMziekZw1xxSwQZEU/8AqHHHI0icN2JKm2KpTADSZcJB6N2ccOj4IfP0xlTZl7vA5Sh1bWLwIa2BOF1vDSEYoTkTLfQLg0tEgTl2Zb1rqO33Po7OYacCzVqRvSSHBkCSI6MXdJWJ+uvI6M5iIHwgdSMarnU4qOcM4aSImRoT1ofyHE9b2pykZa3UqILQ2Q9/Sw6I9kyBGMiFPq7QptLAXDpm60jEF24uyB3A5rzzYNuFGQIdIjpNvRjMCCrOvb2VG3X02ESMObcMjIy3LK03bNMktiVylq0HlrmOk34N1riHOAMNaQIc6d0xGKoHW+lE3xE3cjnuiM1KrVmufTJY5wYWhoDi1tP2pddcMcNPNRbXs6lda29Aa4uggOxMyT0hOZWkJIznyQdpWgEMe0ywO6RboJE4xhhKDb7SLreZL77jDele0J9nmxj2qfaLGBSwcSGS4NDQ28RJxgkHu3Kpo1HX2uLCS0yNMYIM4KscnsTkkty2sBApiXCZLTiPak9Hr4KXUutiSB1kD4qlNCkDJBDuc5ySDiQS7dl4oe19s0ibrplolr2gjFwjAkYFaY0tyMrexc2lrbpEjFpjEahR9jAc3E5EqjG1rK+X1L5F2mwic4vEOMEY4FRG7ToEkl/3XNxY04Oz+/gdyzdWi12NwKQXGkslUtdBxbFQkljGtBABcWOIBgOnMRAO5XlBhdV527dIbBBbF4uM3xpI/Uq2FuBpu5p1US0AQ5oOskCBxxCkVqvN2nmzdOAlzdZDTBHCRiibT2W6qQ4FvRIJGJvAHLLEIb7I6m8ViKYGILTe6V6Ijonpz16rOty8lRaimmspQSN8keY81TWi3EucWvuk3HQTUhrmEzHRxY4QCMEtLaLWvcedDmyXNvPdLdQ2CIzwzGBVOJKZb2ixB4gjqO471l9oMum66bwwk6iQRPitM3bNAgG+BOhjuKqNv1aVVocx4LhhgcT+yicUy4yoPzpcDElpLQb2eYGEKS6xGpV5um1znBrbrWgnNzva3DicE/knyPtNctNSoaVIw66AC94wIgZMbh7R7l69sfYdGgCGgCc97jvc84u6sllhtRrlvZjOTnIaoHMNUi5A5xrXukEDIObrlkd62DOSNjBnmsfz1OzC9BU91S8YaCGN/lDiNJ93qz6s49t2gQBd6U7iAAN8kguHEQOKuMEkJybHs2BZg0tFFoHb8ZlTKNBrchHZ5qkc6pzjbpeSdL8ANH3iMJ7gPzKXY2EVC7nXvGV0Eua063jgJ4YdSdLgVvktXkZb9yGKX4nd6pLdUeHEiq8Rm0ObA/M+IZ/8idydztoLS5t6IhuGJ3c204mfef3KgL1uGWC5Z6htF9Nt2s9l/Mh1QNInIQ1p8cVyBHzCLLVJnwvT4KR9SYG3nvzdENaDiADiSePgm06FR/s0qj+JvJz7Daf4Lh/KT81L1IeWZ2LZrI1wP2t0AaxmTplCDDG5QROTjHbholdsu0HOnU/pKLZdg135UyOLuj8VD1oJBbAurNg+zO4TG7OEptziIAa38rY0jEq+sfJA/wDMqAcGCfE4K5snJ2zs+7eO9xnwyXPP1kV2FTMdZWc6RfNVxGQY0OPxw7lqNm7AonF1Gp/3HD+1p+Kv6VNrRDQAOGARY9esVx6nqZS7bfcdALNYqTPYptb1NA8VJELvXHu+aUePrM6LndvuxiwPRXQFw9bh80oA7N+pRuA263cEjzSa1xe5rBEBxyvEjE8E5zTnqchuCDbLFzjTTvEcRGEY6q9OeMk5dhNCUK1nJn6xSOfX8UWq6zl0ipQiMyJPGCCIWYbyQcy86lWBJILueo06mXEjvR/9LtgiDYjOX/DNHwavUjqelfK+4b/L9zQuNn/jUv6wPNJzdE+y+mf5mnzWeOzrfJwsJj/y3N/taFWV+SFqqmX1KTWk43DUIA/KRj2lNv0tbSf5Fv8AL9zZCz0nAEBpGhABGehRRSaMiq7YmzatBopuqNe0Doi5dIG4G8ZHBWc+vmPkvNlqST2k6+oxscfghV7OHgBzQ4AgiQDBGRE6qRzg9evkkLklrT/U/wAhRFNjb7o7ghP2TSJBNNsjIxHXkphKaq+I1P1P8ipEP/SaYyYOwn5oln2fRY9rzSDi2YBdUAyIgFrgdVJ9ZrseCfX1P1DNLYeV5ptbTFMhrQGgB4MACAOk0k4cVY0eWVIxeDm/ygjthyxQHUue34BUvUanJSkz0OjyooO++ztvt+LI8VMobSpvyLXfldTcR1gOmexeWloSFgWi9ZPygyPVTVZ0i5pDnReJa8AgHK+WjCMe9Bs9Kzi9dDWnLo1MY3Ah0t6sM15pRtFRnsVHt/K4j4KSNvWoYc8XDc8B47nArResXlFZI9EtDqNFr6zgQ2mC4dEkNDRi5rcpwJnPFUx5b2O0Ac3aC1pzim8E9IAgm50QJz45rM0+UlQCHU6Lh+QtntYQmv2rZ3/7lkGmLKpGsyLwOPar+Li+w04mvocqLCwXW1KcAn7zcePSMnrK5ZJtosIyZaRwlp8QQkS+IfK/n2K9nJm73r/KVr/XrBAlOHqV5RiSG1PWf7Jwf6z8MkBrhxPwT7w17ggLDg7/AJ+CLPo4nuUdro/D8U5jt3eUh2SJ7OJxKcD2cdSo7XjTE704vAzMlArDgjqG/UpQewfFA4uPYlHS4BABr08GhN5ycdAhkzgMl1X3QgArHyZJySU3ZmUOo0AQkAhqYgrHYHFKHS3PJCojAptnOaF4AkOeYvA4hNNUjEZahBpugkJA8tMHIoQEjnO1viE+/qZI0du61DJLTwPUnCRiII1CYEznI4TqMj1hdejd5dm5R2HUYjUJzT7vaCkAckevJ3zSED1h+yC127+klcHaZfhJw7CgAjmevXzTXM9fsmF8cOBxHeucd/iZHYdFQCQcfXem1HnwHwCUnOd2+dRqm1czPfn8MlVgNvHenXj6+SG4D1l3jzTSOPrrHyQAaeKQuQMd/r4JuKADl64OCAJXFOgJBIXKOCdPXguQFkcMOgASx2pLp1K4O3LEYSDrglaToO1MA3lcXE5YIAKMM5KcJOeSFlnikBJOaBB+cOQTgbueaCX3cs11OTigA7TeMlLUrTgMlHqVdE+kcJ80V4AOXXRxSUXaqI+rJ/dSL5AhHkB1SpJRa1SAolJ+KdWqFHhsCTZ3iE2k8Sh0HmEEvMofZAS6zgDKc8hwlDrHBDs9Y5IrcA9KoCLpTGvgxogVSQUU1Lw/whWIIcMR68UoIdlgVGZWgwck6oYxCYBr4OBEHemvdHtCRvQxVvDj2JgrObgcuxABi7D3gkDvd7imTq1KKgOBwPX8VSAcH543ZIHDXAJtR0EzIxOIyT2kiJxxz6o+aG0+6ewpjEJ/yPNNv9R6sD3J3ON3lp8O1I9upx4hAhl71kU41PRwnqITc9Z4HNdlrHAnDsTAc5+p7/IEJC/1n2AjFDOHDiDh2BPoUHvPQaXke4CSB1AJoYk+gR5rkc7MtH8Kr/7L/kuTxYEAPGp8Uv1gaFQCDpOuv5vknno6nv8AzfIKMF4AmNeD94J/PtH32jiTAHElV5ed5jHXdMfBDttMczUJgAMdmJyGoGJyTjBNpDss+iZ6bSN7SCD1FK+u0YAhUux/9hhmZBy6+IwU8U8yZ1/UnOCjJxQiXTeDmQivrjIRj681EdHHPfxd8kOnTk6zhM/yqcUtkBLYNcITq1aNyikCMvUIMTPbp+ZGKSAsLMJxwwS139SjCkAdd2WHtZx5oRZiOzQfhQ4pKrAsaAwmM0Os9AuYRw3fhQXtxOPh+ZDiqoC0oxdCBdc4wGkngJQabMsfXRVVtqq5lPouc0l1MS0kHFzddytaak0rA0TMRoo14g5IdnHHXzag1m/D9IUOIizqAuGQCDRrEGDlko9EZjHvO8jzQ61LXz6ijHyBPtFOcYTKL9ECkSRGfb+YIVWkcx8fylNpdwJ76MYiE9pBbjn4digUS7KccvEhDfSdHZw1b+yMQsnwWnCI9Zo7WB26fWQVbRfOB46DHIqV9Tdp3QPezTUeBkyjTdIAF7AnATlKBdacQ4A7typuUzXNs7wYxugRE9I3evMqa6ldHRxjhAjA5StXpJRTCyWXaOI8PRSRGLXYKKLS4YGBnpuM4xmm1Q7MGc/DHeoxQEt9RuuB9aJrnxm4EeKhc8deO/r3+KQhxxa4mdJnSe3JGKCyYysz7roPGFdbFtfN0bU8GHBlMBzT71Rpw7BlqsuanvE6ZHfn6CttnNix2lwe4y6zgYxjeqSD8lppxqVjj3JA2u04uDSd4e9k/wArTA7AFyz3WDPrcuRlLkMmCLpy9T/lIKUzv6z+L5odKkTGO7T8nzUgMAGcdg3D5rPv5EEFIAHHfqfxqJtWeaq4/dfx0dv6k6prjv0G4/NCtlOadST91+7c9bx0NTKKXncz6kdxnJ6heoMJ45EjXgrR7oGuup3OVXsmmW0mtOBE5Ae9oUe4d/hwPzVavptVTap72HVhySTM5+pcj06REdLd+lRqbOOPVkATj4pz3RhJn/8APyUx9JqvwHVhyOdJ1PoBOpsOfXu3PQGtOQJ016kaDGeh37nqH6fVXdDWpF9mFqE79eHvdSbQB3+oaopc6c9eO9OYSNfj+FX8HrPwT1ockyrMHH1B+SAQfE/qSVCYOO/f+JC6Ux896iXptSm67dx9SNpX3LGnOGO7T8ipuUU3GA4zUpDtkfJWoa6BiMuO5qqeUDD9mCc6tKInOSp017kaFnQJ3+uiU6qx0ftwI8lGoMIOY7zuapL6LspGup3vUeAGNJBz1/UEV8kZ6bvw/soZpnf8d4+aLQvEET8dbwSSEKQQc9d34k7EjP1BHkg1KTvPM8DvSUAQYJ4a8QmAS4QSZJxO7KQfNGp4wC4zlpxHyTKtnJGem/8ACFHdRIOJ9SEVQBqlEz7R/wAj9kZloORcdfIxAUei2Yx3eaX6vMQ6JgQBlI8VSAFyqoEMbIPTqMaMsRzjfFEbhqerDUKu2tVJNEOcSDWYcdIEn+0K0DWOAxGkY/iOi1n/AER+4DrrXanr/l1QzTukZ+Oo8UMsAjhGOeRjqRqddkQQP6cDB1WQDA5jonA4anq7Uwsu4jhr4JaoGg36bjPamGqRpnOnUUwHNtLTg7vncfWSuKYaLDVun2q7B7Ueyx7su1VF8Hz7RuVo+tcsAjW0ndkKLR5rWHcqJVC0kaD12rkM23KRpvC5IQxrojE6bvwpKjpykDDMzozHJIuWLYCUmE6+oS7RH2dTH7rvg9IuWkZytbiSRB2G4miwlx/a8ArKgwnXT9JSrk9Scuo9/LHguCQ4Rlx0G93yQHTOmfmlXKZas15YnCPASzNOfr7qfUJAz0OEcHJVyl6kpLdgopdkRhM9v6lJptwGWW7fdXLk46k77v8AIsY8CWhp4a/qQqbDIy7vxBcuUPUm13DFcE5s4YjLd+EcVTcopv0Rvr0/7nJVy00v6iiQ0O36buHXwVjddv1/UVy5ZICFXBGunkD5LqMgjHXzK5ckxEh9Ixnp+lArUoOfqZ81y5MbJFlBcInHs3EeQTLTQnXry3A+S5chMPBG5uDn8N4O5SrMyfvGRn2HxzXLlSEir2tR+2s7RmS92ePRY7X5KYxt3GTEnXdBXLltqPaP0/2CJfNAziddctRootWzgGN87ly5Z2NiNYNdfMfNS6dkBzHrGc1y5NDiiNXohuQ8eMKzthuWGgCDjVr67ubEeC5ctIefoNFX9XB0XLlykKP/2Q==",
                teamHome: "Varzim",
                teamAway: "Rio Ave",
                goals: [
                    {
                        player: "Ricardo Barros",
                        minute: 3,
                        team: "Varzim"
                    },
                    {
                        player: "Rui Coentrão",
                        minute: 23,
                        team: "Varzim"
                    },
                    {
                        player: "Ricardo Barros",
                        minute: 72,
                        team: "Varzim"
                    },
                    {
                        player: "Tarantini",
                        minute: 92,
                        team: "Rio Ave"
                    }
                ]
            },
            {
                id: 2,
                date: "12-12-2019",
                stadiumName: "Estádio do Dragão",
                stadiumLink: "https://static.globalnoticias.pt/oj/image.aspx?brand=OJ&type=generate&name=big&id=5642421&source=ng8236370&w=768&h=512&t=20170201183800",
                teamHome: "Porto",
                teamAway: "Aves",
                goals: [
                    {
                        player: "Marcano",
                        minute: 13,
                        team: "Porto"
                    }
                ]
            }
        ]
    }
});