package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetMainPage(ctx *gin.Context) {
	ctx.HTML(http.StatusOK, "home.html", nil)
}

func main() {
	router := gin.Default()
	router.SetTrustedProxies([]string{"nil"})
	router.LoadHTMLGlob("web/*")
	router.Static("/static", "./web")
	router.StaticFile("/favicon.ico", "./web/favicon.ico")
	router.Handle(http.MethodGet, "/index", GetMainPage)
	router.Run(":8080")
}
