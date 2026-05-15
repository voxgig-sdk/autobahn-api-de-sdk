package core

type AutobahnApiDeError struct {
	IsAutobahnApiDeError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewAutobahnApiDeError(code string, msg string, ctx *Context) *AutobahnApiDeError {
	return &AutobahnApiDeError{
		IsAutobahnApiDeError: true,
		Sdk:              "AutobahnApiDe",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *AutobahnApiDeError) Error() string {
	return e.Msg
}
