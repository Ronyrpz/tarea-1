// concidencia con simbolo de moneda \p{Sc}
// espacios y saltos de linea \p{Z}
// mayusculas y minusculas scrpts latinos y griegos  [\p{L}\p{Script=Latin}\p{Script=Greek}]
// letra y numero \p{L}\p{N}

let texto = "B A5C D 2 E 55ff3gfh F G $$$ S/  H I J K ## L M N4 O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z Α Β Γ Δ Ε Ζ Η Θ Ι Κ Λ Μ Ν Ξ Ο Π Ρ Σ Τ Υ Φ Χ Ψ Ω α β γ δ ε ζ η θ ι κ λ μ ν ξ ο π ρ σ τ υ φ χ ψ ω"
let expresion = /[\p{L}\p{Script=Latin}\p{Script=Greek}]/gu;
console.log(texto.match(expresion))