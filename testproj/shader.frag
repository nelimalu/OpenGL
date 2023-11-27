#version 330 core

in vec4 gl_FragCoord;

layout(location = 0) out vec4 color;

uniform vec4 u_Color;

void main() {
	color = vec4(gl_FragCoord.x / 640, 1.0, 0.0, 1.0);
}