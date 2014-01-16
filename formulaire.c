#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <cgic.h>

#define TITRE "Résultat du questionnaire"

int cgiMain(void)
{

   char prenom[40], nom[40], couleur[40], choix[40];    /* parametres */

   cgiFormStringNoNewlines("nom",nom,41);
   cgiFormStringNoNewlines("prenom",prenom,41);
   cgiFormStringNoNewlines("couleur", couleur, 41);
   cgiFormStringNoNewlines("choix",choix,41);

   cgiHeaderContentType("text/html");    /* en-tete MIME: type de document */
   fprintf(cgiOut, "<html>\n");
   fprintf(cgiOut, "<head>\n");
   fprintf(cgiOut, "<title>%s</title>\n", TITRE);
        fprintf(cgiOut, "</head>\n");
        fprintf(cgiOut, "<body bgcolor=\"#dddddd\">\n");
        fprintf(cgiOut, "<h1>%s</h1>\n", TITRE);
        fprintf(cgiOut, "<hr>\n");

        /*
         * ici commence le traitement
         * ATTENTION: ce processus s'execute sous le controle du serveur httpd
         *            avec l'uid de nobody et non celui de l'utilisateur.
         */
        fprintf(cgiOut, "<b>%s %s</b>, dont la couleur favorite est <b>%s</b>, vous avez répondu <b>%s</b> à la question<p>\n",
                prenom, nom, couleur, choix);

        /*
         * ici se termine le traitement
         */
        fprintf(cgiOut, "<hr>\n");
        fprintf(cgiOut, "</body>\n");
        fprintf(cgiOut, "</html>\n");

        return 0;

}
